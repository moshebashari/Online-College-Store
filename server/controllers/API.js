const {Form, Product, ProductCategories, ProductImages} = require('../models');



const getProductCategories = async (req, res) =>{
    try {
        const categoryId = parseInt(req.params.categoryId);
  
        const productData = await Product.findAll({
            include: [
            { model: ProductImages, required: false, attributes: ['url'], as: 'images' },
            {
                model: ProductCategories,
                required: true,
                attributes: [],
                where: {categoryId}
            }
            ] // join
        })
        // console.log('productData', productData);
        const products = productData;
        res.json({products});
    }
    catch (err) {
        console.log(err.message);
    }
}


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


module.exports = {
    getProductCategories,
    sendContactForm
}