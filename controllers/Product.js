const { Product, ProductImages, ProductCategories, Category } = require('../models');

const showProducts = (request, response) => {
    response.write('This is products page!');
    response.end();
}

const productPage = async (request, response) => {
    // console.log(request)
    try {
        const id = parseInt(request.params.productId);
        console.log(id)
        const productData = await Product.findOne({
            // row: true,
            where: {
                id: id
            },
            include: [{ model: ProductImages, required: false, attributes: ['url'], as: 'images' },
            {
                model: ProductCategories,
                required: false,
                attributes: ['categoryId'],
                include: { model: Category, required: false, attributes: ['name'] }
            }
            ] // join
        })

        //  const categoryData = await ProductCategories.findOne({
        //     // row: true,
        //     where: {
        //         productId: id
        //     },
        //     include: [{ model: Category, required: false, attributes: ['name']},
        //     ] // join
        // })


        const product = productData.toJSON();
        // const products = productsData.map(p => ({
        //     ...p['_previousDataValues'],
        //     url: p['_previousDataValues']['images'][0]
        // }));
        console.log('products', product);
        response.render('Product-details', {
            product
        });
    }
    catch (err) {
        console.log(err.message);
    }
    response.render('product-details');
}



module.exports = {
    showProducts,
    productPage
}