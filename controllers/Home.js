const { raw } = require('mysql2');
const {Product, ProductImages} = require('../models');


const homePage = async (request, response) =>{
    const products = await Product.findAll({
        raw: true,
        include: [{model: ProductImages, required: false, attribute: ['url']}] // join
    })
    console.log(products)
    response.render('Home', {
        title: 'Ivory Store Homepage'
    });
}

const contactUsPage = (request, response) =>{
    const {fullName, phone, email, message} = request.query;
    
    // const fullName = request.query.fullName;
    // const phone = request.query.phone;
    // const email = request.query.email;
    // const message = request.query.message;
    if(fullName){
        response.render('Thank-you-page',{
            title: 'We got your message',
            fullName,
            phone,
            email,
            message
        })
    }else{
        response.render('contact-us');
    }
}

const contactUsPageAPI = (request, response) =>{
    const {fullName, phone, email, message} = request.query;

    response.json({fullName, phone, email, message});
}



module.exports = {
    homePage,
    contactUsPage,
    contactUsPageAPI
}