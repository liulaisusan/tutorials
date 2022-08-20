const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

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

// middleware & static files
app.use(express.static('public')); // folder name which will be accessable from the browser
app.use(express.urlencoded({ extended: true })); // automatic change the request to an object
app.use(morgan('dev'));



// response the request 
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {

    // view engine version
    res.status(404).render('404', { title: '404' });
})
// need to put it in the bottom
// creat middleware, fire middleware functions
// this function will be fired for every request when the code is reach here.
// becaue the code before if match will send the request so the code will not be reached