const { request, response } = require('express');
const { Form, Product, ProductImages, Category } = require('../models');
const { Op } = require('sequelize');

const sendContactForm = async (req, res) => {
    const { from_name: name, email_id: email, message } = req.query;
    try {
        const today = new Date();
        await Form.create({
            name,
            email,
            message,
            createdAt: today,
            updatedAt: today
        });
        res.status(200).json({ message: 'Contact form submitted successfully', success: true });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while submitting the contact form', success: false });
    }

}

const searchItems = async (request, response) => {
    const value = decodeURIComponent(request.query.value).trim();
    try {
        const allProducts = await Product.findAll({
            attributes: ['id', 'name'],
            where: {
                name: {
                    [Op.like]: `%${value}%`
                }
            },
        })
        const products = allProducts.map(p => p.toJSON());
        console.log(products)

        response.json(products);
    }
    catch (err) {
        console.log(err.message);
    }

}


module.exports = {
    sendContactForm,
    searchItems,
}