// const { raw } = require('mysql2');
const { Product, ProductImages, Category } = require('../models');
const { Op, sequelize } = require('sequelize');


const homePage = async (request, response) => {
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
        // console.log('products', products);
        // response.render('Home', {
        //     title: 'Ivory Store Homepage',
        //     products
        // });
        response.json(products);
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

const contactUsPageAPI = (request, response) => {
    const { fullName, phone, email, message } = request.query;

    response.json({ fullName, phone, email, message });
}


const searchPage = async (request, response) => {
    let searchValue = request.query.q;
    searchValue = decodeURIComponent(searchValue).trim();
    try {
        const allProducts = await Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${searchValue}%`
                }
            },
            include: [{ model: ProductImages, required: false, attributes: ['url'], as: 'images' }]
        })
        const products = allProducts.map(p => p.toJSON());
        // console.log(products)

        // const allCategories = await Category.findAll()
        // const categories = allCategories.map(c => c.toJSON())
        // response.render('Search-results', {
        //     products,
        //     categories
        // })
        const data = {}
        data.searchValue = request.query.q;
        data.products = products;
        // data.categories = categories;
        response.json(data);
    }
    catch (err) {
        console.log(err.message);
    }
}

const getCategories = async (request, response) => {
    try {
        const allCategories = await Category.findAll()
        const categories = allCategories.map(c => c.toJSON())
        response.json(categories);
    }
    catch (err) {
        console.log(err.message);
    }
}


// API endpoint to get all products
// const getProducts = async (request, response) => {

//     const query = request.query.q;

//     try{
//         let productsData = [];
//         if(query){
//             productsData = await Product.findAll({
//                 where: {
//                     name: {
//                         [Op.like]: `%${query}%`
//                     }
//                 },
//                 include: [{model: ProductImages, required: false, attributes: ['url'], as: 'images'}]
//             });
//         }else{
//             productsData = await Product.findAll({
//                 include: [{model: ProductImages, required: false, attributes: ['url'], as: 'images'}]
//             });

//         }
//         const products = productsData;
//         response.json({success: true, products});
//     }catch(err){
//         console.log(err.message);
//         response.status(500).json({success: false, error: err.message});
//     }
// }





module.exports = {
    homePage,
    contactUsPage,
    contactUsPageAPI,
    searchPage,
    getCategories
}