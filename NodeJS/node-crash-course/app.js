const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000); // this will return a server object

// response the request 
app.get('/', (req, res) => {
    // res.send('<p>home page</p>'); // infers header, status code
    res.sendFile('./views/index.html', { root: __dirname }); // root is the start point of the relative path
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>'); // infers header, status code
    res.sendFile('./views/about.html', { root: __dirname }); // root is the start point of the relative path

});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
    // res.status() will return the res itself
})
// need to put it in the bottom
// creat middleware, fire middleware functions
// this function will be fired for every request when the code is reach here.
// becaue the code before if match will send the request so the code will not be reached