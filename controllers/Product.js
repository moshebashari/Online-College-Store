const showProducts = (request, response) =>{
    response.write('This is products page!');
    response.end();
}



module.exports = {
    showProducts
}