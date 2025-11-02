const { default: chalk } = require("chalk");
const express = require("express");
const path = require('path');
const homeContorller = require('./controllers/Home');
const contactController = require('./controllers/Contact')
const ProductRoutes = require('./routes/Product');
const HomePageRoutes = require('./routes/Home');
const PORT = 3000;
const { sequelize } = require('./utils/database');
const { error } = require("console");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(HomePageRoutes);
// app.use('/api');

app.use('/product', ProductRoutes);
app.get('/products', (request, response) => {
    response.write('Ivory pordacts page');
    response.end(); // return 
})

app.listen(PORT, async function () {
    console.log(chalk.blue('Server is running!'));
    try {
        await sequelize.authenticate();
        console.log(chalk.green('connection has been established successfully'));
    }
    catch {
        console.error(chalk.red('Unable to connect to the database:', error));
    }
})
