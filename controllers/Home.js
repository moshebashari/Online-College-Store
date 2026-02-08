// const { raw } = require('mysql2');
const { Product, ProductImages, Category } = require('../models');
const { Op, sequelize } = require('sequelize');


const homePage = async (request, response) => {
    const categoryIcons = ['bi-laptop', 'bi-phone-fill', 'bi-pc', 'bi-playstation', 'bi-device-ssd-fill', '',
                           'bi-camera-fill', 'bi-printer-fill', '', 'bi-earbuds', 'bi-plug-fill', 'bi-router-fill',
                           'bi-server', 'bi-display']
    const slides = Math.ceil(categoryIcons.length / 8);
    const count  = 0;
    try {
        const productsData = await Product.findAll({
            include: [{ model: ProductImages, required: false, attributes: ['url'], as: 'images' }] // join
        })
        // const products = productsData.map(p => ({
        //     ...p,
        //     url: p['images.url']
        // }))
        const products = productsData.map(p => ({
            ...p['_previousDataValues'],
            url: p['_previousDataValues']['images'][0].url
        }));
        const allCategories = await Category.findAll()
        const categories = allCategories.map(c => c.toJSON()) 
        // console.log('products', products.length);
        response.render('Home', {
            title: 'Ivory Store Homepage',
            products,
            categoryIcons,
            slides,
            count
        });
    }
    catch (err) {
        console.log(err.message);
    }
}

const contactUsPage = (request, response) => {
    const { fullName, phone, email, message } = request.query;

    // const fullName = request.query.fullName;
    // const phone = request.query.phone;
    // const email = request.query.email;
    // const message = request.query.message;
    if (fullName) {
        response.render('Thank-you-page', {
            title: 'We got your message',
            fullName,
            phone,
            email,
            message
        })
    } else {
        response.render('contact-us');
    }
}

const searchPage = async (request, response) => {
    let searchValue = request.query.q;
    console.log(searchValue)
    searchValue = decodeURIComponent(searchValue).trim();
    try {
        const allProducts = await Product.findAll({
            where: {
                // [Op.and]: [
                //     sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), {
                //         [Op.like]: `%${searchValue.toLowerCase()}%`
                //     })
                // ]
                name: {
                    [Op.like]: `%${searchValue}%`
                },
            },
            include: [{ model: ProductImages, required: false, attributes: ['url'], as: 'images' }],
            order:[ ['price', 'ASC']],
        })
        const products = allProducts.map(p => p.toJSON());
        // console.log(products)

        const allCategories = await Category.findAll()
        const categories = allCategories.map(c => c.toJSON())
        response.render('Shop-grid', {
            searchValue,
            products,
            categories
        })

    }
    catch (err) {
        console.log(err.message);
    }

}


module.exports = {
    homePage,
    contactUsPage,
    searchPage
}