

const contactPage = (request, response) => {
    response.render('ContactForm');
}

const contactApi = (request, response) =>{
    const {fullName, phone, email, message} = request.query;

    response.json({fullName, phone, email, message});
}


module.exports = {
    contactPage,
    contactApi
}
