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

    try {
        const encryptedPassword = await bcrypt.hash(password, saltRounds)
        const today = new Date();
        await User.create({
            username,
            email,
            password: encryptedPassword,
            createdAt: today,
            updatedAt: today
        })
        result.message = 'User has been registered successfully';
        result.status = true;
    } catch (error) {
        result.message = error.message;
        result.status = false;
    }
    console.log(result.message)
    res.cookie('signup', JSON.stringify(result));
    res.redirect('/');
}

const logInForm = async (req, res) => {

}

module.exports = {
    signUpForm,
    logInForm
}