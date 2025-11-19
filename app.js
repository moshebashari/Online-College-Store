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
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


var sessionStore = new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 7 * 24 * 60 * 60 * 1000
});


const app = express();
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));
app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

// routes directs
app.use(HomePageRoutes);
app.use('/product', ProductRoutes);
app.use('/api', ApiRoutes);
app.use('/auth', AuthRoutes);

app.listen(PORT, async function () {
    console.log(chalk.blue('Server is running!'));
    try {
        await sequelize.authenticate();
        await sessionStore.sync();
        console.log(chalk.green('connection has been established successfully'));
    }
    catch {
        console.error(chalk.red('Unable to connect to the database:', error));
    }
})
