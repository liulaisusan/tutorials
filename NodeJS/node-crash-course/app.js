const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // default folder for all the views is 'views', can be set to other folders


// listen for requests
app.listen(3000); // this will return a server object

// response the request 
app.get('/', (req, res) => {
    // res.send('<p>home page</p>'); // infers header, status code
    // res.sendFile('./views/index.html', { root: __dirname }); // root is the start point of the relative path

    // view engine version
    // pass an object to the html, which can be accessed by ejs engine
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'ok, i know that.' },
        { title: 'Mario finds eggs', snippet: 'ok, i know that.' },
        { title: 'How to finds eggs', snippet: 'ok, i know that.' },
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>'); // infers header, status code
    // res.sendFile('./views/about.html', { root: __dirname }); // root is the start point of the relative path

    // view engine version
    res.render('about', { title: 'About' });
});

// // redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})
// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    // // res.status() will return the res itself

    // view engine version
    res.status(404).render('404', { title: '404' });
})
// need to put it in the bottom
// creat middleware, fire middleware functions
// this function will be fired for every request when the code is reach here.
// becaue the code before if match will send the request so the code will not be reached