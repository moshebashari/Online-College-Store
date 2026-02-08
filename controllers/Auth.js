const { response } = require('express');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
require('dotenv').config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const signUpForm = async (req, res) => {
    const { username, email, password, password2 } = req.body;
    const result = { status: true, message: '', action: 'signup' };

    if (password !== password2) {
        result.message = 'Error: Passowrds are mismatch';
        result.status = false;
    }

    let user = null;
    try {
        const encryptedPassword = await bcrypt.hash(password, saltRounds)
        const today = new Date();
        user = await User.create({
            username,
            email,
            password: encryptedPassword,
            createdAt: today,
            updatedAt: today
        })
        result.message = 'You have been registered successfully';
        result.status = true;
        const token = jwt.sign({ username: username, password: encryptedPassword }, PRIVATE_KEY, { expiresIn: '24h' })
        res.cookie('token', token);
    } catch (error) {
        console.log(error.message)
        result.message = error.message;
        result.status = false;
    }
    // res.cookie('signup', JSON.stringify(result));
    // req.session.user = user;
    res.redirect('/');
}

const logInForm = async (req, res) => {
    const { password, userOrEmail } = req.body;

    const user = await User.findOne({
        attributes: ['password', 'username'],
        where: {
            [Op.or]: {
                username: userOrEmail,
                email: userOrEmail
            },
        },
        raw: true
    })

    if (!user) {
        res.json('User was not found')
        return
    }
    console.log(user.password)
    const isSamePassword = await bcrypt.compare(password, user.password);
    console.log(isSamePassword)
    if (!isSamePassword) {
        console.log('test')
        res.json('Incorrect pasword')
        return
    }

    const token = jwt.sign(user, PRIVATE_KEY, { expiresIn: '24h' })
    res.cookie('token', token);
    res.redirect('/');
}

const logOut = async (request, response) => {
    // await request.session.destroy();
    response.clearCookie('token')
    response.redirect('/');
}

module.exports = {
    signUpForm,
    logInForm,
    logOut
}