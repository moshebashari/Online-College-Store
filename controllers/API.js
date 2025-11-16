const {Form} = require('../models');


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
    sendContactForm
}