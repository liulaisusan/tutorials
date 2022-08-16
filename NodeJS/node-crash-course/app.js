const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');

// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://liulaisusan:IAMbest713@cluster0.kg0jgyb.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI) // asynchron funct, so can use .then
    .then((result) => app.listen(3000)) // start to listen requests only when the db is connected
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // default folder for all the views is 'views', can be set to other folders


// // listen for requests
// app.listen(3000); // this will return a server object

// middleware & static files
app.use(express.static('public')); // folder name which will be accessable from the browser
app.use(morgan('dev'));



// response the request 
app.get('/', (req, res) => {
    // res.send('<p>home page</p>'); // infers header, status code
    // res.sendFile('./views/index.html', { root: __dirname }); // root is the start point of the relative path

    // // view engine version
    // // pass an object to the html, which can be accessed by ejs engine
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'ok, i know that.' },
    //     { title: 'Mario finds eggs', snippet: 'ok, i know that.' },
    //     { title: 'How to finds eggs', snippet: 'ok, i know that.' },
    // ];
    // res.render('index', { title: 'Home', blogs });

    res.redirect('/blogs')
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

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => console.log(err))
})

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