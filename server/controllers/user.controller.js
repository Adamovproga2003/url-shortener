const UserModel = require('../models/User');
const ShortURL = require('../models/URL');

exports.getURLs = async (request, response) => {
    const { email } = request.user;

    const user = await UserModel.findOne({ email });

    if (!user) {
        return response.status(404).json({
            "message": "User not found"
        })
    }

    ShortURL.find({ userID: user._id })
        .exec(function (err, urls) {
            if (err) {
                return response.status(404).json({
                    "message": "Not such urls"
                })
            }
            return response.status(200).json({
                urls: urls
            })
        });
}