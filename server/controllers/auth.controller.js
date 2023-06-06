const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

exports.register = async (request, response) => {
    const { name, email, password } = request.body;

    let user = await UserModel.findOne({ email });

    if (user) {
        return response.status(400).json({
            "errors": "User was found. Please try again!"
        })
    }

    user = new UserModel({ email, name, password, loginDate: new Date })
    user.save()

    const token = jwt.sign({ name, email, password }, process.env.JWT_ACCOUNT_ACTIVATION, { expiresIn: '1d' });

    response.cookie('TOKEN', token, {
        httpOnly: true,
        sameSite: 'none',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
    })

    return response.status(201).json({
        message: 'Register succeded'
    })
}

exports.login = async (request, response) => {
    const { email, password, rememberMe } = request.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
        return response.status(404).json({
            errors: "User not found"
        })
    }

    if (!user.authenticate(password)) {
        return response.status(400).json({
            errors: "Invalid credentials"
        })
    }

    const token = jwt.sign({ name: user.name, email, password }, process.env.JWT_ACCOUNT_ACTIVATION, { expiresIn: rememberMe ? '30d' : '1d' });
    response.cookie('TOKEN', token, {
        httpOnly: true,
        sameSite: 'none',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
    })
    return response.status(201).json({
        message: 'Login successful'
    })
}

exports.profile = async (request, response) => {
    return response.status(200).json({
        name: request.user.name,
        message: "Profile loaded"
    })
}

exports.logout = async (request, response) => {
    response.clearCookie('TOKEN');
    return response.status(200).json({
        message: 'Logout successful'
    })
} 