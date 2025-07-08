const { default: chalk } = require("chalk");
const express = require("express");
const path = require('path');
const homeContorller = require('./controllers/Home');
const contactController = require('./controllers/Contact')
const HomePageRoutes = require('./routes/Home');
const PORT = 3000;


const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))
app.use(HomePageRoutes);

app.get('/products', (request, response) => {
    response.write('Ivory pordacts page');
    response.end(); // return 
})


app.listen(PORT, function(){
    console.log(chalk.red('Server is running!'));
})
