const jwt = require('jsonwebtoken');

exports.authMiddleware = (request, response, next) => {
    const bearerHeader = request.headers['authorization']


    console.log("Header", bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const token = bearer[1]

        try {
            const decoded = jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION)
            request.user = decoded;
        } catch (err) {
            return response.status(401).json({
                errors: "User is not authorized"
            })
        }
    } else {
        response.sendStatus(403)
    }

    next();
}