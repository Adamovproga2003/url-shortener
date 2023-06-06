const ShortURL = require('../models/URL');
const UserModel = require('../models/User');
const { connectRedis, jobQueue } = require('../helpers/redis')
const { range, hashGenerator, getTokenRange, removeToken } = require('../helpers/zookeeper')

exports.createURL = async (req, res) => {

    let userID;

    if (!req.body.originalUrl) {
        return res.status(400).json({ errors: "You don't pass original URL. Please do it!" })
    }

    if (req.body.alias) {
        const url = await ShortURL.findOne({ hash: req.body.alias })

        if (url) {
            return res.status(400).json({ errors: "Your alias doesn't fit. Try another one!" })
        }
    }

    UserModel.findOne({ email: req.user.email }, async (err, user) => {
        if (err) {
            console.error(err)
        }
        userID = user._id
    })

    let redisClient = await connectRedis()

    redisClient.get(req.body.originalUrl, async (err, response) => {
        if (err) {
            res.status(400).json({ errors: "Something went wrong in server response" })
        } else if (response) {
            if (req.body.alias) {
                res.status(302).json({ hash: response, message: "Alias has been already generated. Your one isn't relevant." })
            } else {
                res.json({ hash: response, message: "Succeeded operation(got from memory)" })
            }
        }
        else {
            ShortURL.findOne({ originalUrl: req.body.originalUrl }, async (err, url) => {
                if (err) {
                    res.status(400).json({ errors: "Something went wrong in server response" })
                }
                else if (url) {
                    res.json({ hash: url.hash, message: "Succeeded operation" })
                    redisClient.setex(url.originalUrl, 365 * 24 * 60 * 60 * 1000, url.hash)
                }
                else {
                    while (true) {
                        const url = await ShortURL.findOne({ hash: range.curr })
                        if (url) range.curr++
                        else break
                    }
                    if (range.curr >= range.end - 1) {
                        await getTokenRange()
                        range.curr++
                    }
                    const newURL = new ShortURL({
                        hash: req.body.alias ? req.body.alias : hashGenerator(range.curr - 1),
                        originalURL: req.body.originalUrl,
                        visits: 0,
                        expirationDate: new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000)),
                        userID
                    })
                    await newURL.save()
                    res.json({ hash: newURL.hash, message: "Succeeded operation" })
                    redisClient.setex(req.body.originalUrl, 365 * 24 * 60 * 60 * 1000, newURL.hash)
                }
            })
        }
    })
}

exports.urlGet = async (req, res) => {
    const url = await ShortURL.findOne({ hash: req.query.identifier })
    if (url) {
        await ShortURL.updateOne({ hash: req.query.identifier }, { visits: url.visits + 1 })
        await url.save();
        res.status(200).json({
            url: url.originalURL
        })
        jobQueue.enqueue(url.hash)
    } else {
        res.send('URL not found')
    }
}

exports.validateAlias = async (req, res) => {
    const { alias } = req.body

    console.log('validating alias')
    ShortURL.findOne({ hash: alias }).exec((err, url) => {
        if (url) {
            return res.status(400).json({
                errors: [{ field: 'alias', message: 'Alias already exists' }]
            })
        }
        return res.status(200).json({
            message: 'Validation succeeded'
        })
    })
}
