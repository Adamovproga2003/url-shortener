const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const urlRoute = require('./routes/url.route')
const authRoute = require('./routes/auth.route')
const userRoute = require('./routes/user.route')
const cors = require('cors')
const morgan = require('morgan')

const BASE_URL = process.env.BASE_URL

require('dotenv').config()

require('./helpers/redis').connectRedis()
require('./helpers/zookeeper').connectZK()

const app = express()
const port = process.env.PORT || 4000

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected!'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cookieParser())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :remote-addr :date'));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", process.env.DEVELOPMENT_CLIENT_URL);
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header('Access-Control-Allow-Methods', '*')
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

if (process.env.NODE_ENV == 'development') {
    app.use(cors({ origin: true, credentials: true }))
}

app.use(`/${BASE_URL}/url`, urlRoute)
app.use(`/${BASE_URL}/auth`, authRoute)
app.use(`/${BASE_URL}/user`, userRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
