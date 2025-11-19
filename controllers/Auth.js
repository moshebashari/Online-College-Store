const { response } = require('express');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;


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
    } catch (error) {
        result.message = error.message;
        result.status = false;
    }
    // res.cookie('signup', JSON.stringify(result));
    req.session.user = user;
    res.redirect('/');
}

const logInForm = async (req, res) => {

}

const logOut = async (request, response) => {
    await request.session.destroy();
    response.redirect('/');
}

module.exports = {
    signUpForm,
    logInForm,
    logOut
}