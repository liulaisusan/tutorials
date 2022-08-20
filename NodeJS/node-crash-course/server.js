const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => { //every request only fire greet() once, even the code said twice
        console.log('hello');
    });

    greet();


    // BASIC ROUTING
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200; // SET STATUS CODE
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': // REDIRECT TO OTHER PAGE
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;

    }

    // RESPONSE WITH HTML
    // set header content type
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        //res.write(data);
        res.end(data); // if just write one thing to the request, can put content in end()
    })

});
// create a http server, the callback will be fired every time a request come
// req: all the info of request
// res: the object we use to sent the response

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
}) // fired when we start listening