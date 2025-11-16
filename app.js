const { default: chalk } = require("chalk");
const express = require("express");
const path = require('path');
const homeContorller = require('./controllers/Home');
const contactController = require('./controllers/Contact')
const ProductRoutes = require('./routes/Product');
const HomePageRoutes = require('./routes/Home');
const ApiRoutes = require('./routes/Api');
const AuthRoutes = require('./routes/Auth');
const PORT = 3000;
const { sequelize } = require('./utils/database');
const { error } = require("console");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')



const app = express();
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(HomePageRoutes);
// app.use('/api');

app.use('/product', ProductRoutes);
app.use('/api', ApiRoutes);
app.use('/auth', AuthRoutes);

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
