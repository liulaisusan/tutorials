# Node.js

Tutorial from https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=1&ab_channel=TheNetNinja

## Node.js intro

JS is a more abstract programming language which can not directly run on a machine but in a browser with the help of V8. NodeJS is a wrapper written in C++ so that allows JS can run on a machine without a website front end.

### Role of Node.js

Run JS on server side and handle the request from website front-end.

### Server and Client

- Server : code with nodejs, listen the request from the client. ([manual example](./node-crash-course/server.js))
- Client : browser, visit a website is enter the url and send the request to the server to sent back the website component like html, images, css, json...

#### How to know the correct server?

- IP Address: identify the host
- Domain name: map the ip address
- localhost: a domain name on the web, loopback ip (127.0.0.1), connect to own computer
- Port: doors into a computer to keep info from diff apps sepreate. 3000 is common for local development

#### Different types of http request

- get : request to get a resource
- post : request to create new data like a new blog
- delete : request to delete data
- put : request to update data
- route parameters: the variable parts of the route that may change value

#### [Status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- 200: ok
- 301: resource moved
- 404: not found
- 500: internal server error

### Middleware

Code which runs (on the server) between getting a request and sending a response. e.g. `app.use()` or `app.get()`. The middleware will be fired sequentially until the end or the response is sent.  
Examples:

- Logger middleware to log details of every request
- Authentication check middleware for protected routes
- Middleware to parse JSON data from requests
- Return 404 pages

### MongoDB

using collection to keep the data. Each collection can have only one type of data.

- [mongoose](https://mongoosejs.com/)
- Schema & Model : [example of schema and model](./node-crash-course/models/), [example in app.js](./node-crash-course/app.js)

### MVC

MVC stands for model, view, controller, is a way of structuring our code and files to keep code more modular, reusable and easier to read.

- [model](./node-crash-course/models/blog.js): the customized data structre
- [view](./node-crash-course/views/): the layout etc.
- [controller](./node-crash-course/controllers/): forms the link between model and view

#### Tips

- use `next()` to tell the programm run next middleware
- third-party middleware
  - [morgan](https://www.npmjs.com/package/morgan): for logger
  - static middleware

### Crash course

- [**global object**](https://www.geeksforgeeks.org/node-js-global-objects/#:~:text=server%2Dside%20scripting.-,Node.,without%20importing%20any%20particular%20module.)
- [**Module export and import**](https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/): [example](./node-crash-course/modules.js)
- [**file system**](https://nodejs.org/api/fs.html): [example](./node-crash-course/files.js)
- [**streams and buffer**](https://nodesource.com/blog/understanding-streams-in-nodejs/): for large amounts of data [example](./node-crash-course/streams.js)
- [**Server**](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module#step-1-creating-a-basic-http-server): [example](./node-crash-course/server.js) not exactly the same.
- [**npm**](https://www.npmjs.com/): package management, can search for packages
  - [nodemon](https://www.npmjs.com/package/nodemon):automatically restarting the node application when file changes in the directory are detected.
  - [lodash](https://lodash.com/)
  - [express](http://expressjs.com/): easy routing, clean code etc. ([example](./node-crash-course/app.js))
    - View engines (e.g. [ejs](https://ejs.co/):
      - for dynamic html/data inject ([example](./node-crash-course/app.js))
      - for partials templates ([example](./node-crash-course/views/partials/))
      - add css ([example](./node-crash-course/views/partials/head.ejs))
- [express router](https://expressjs.com/en/guide/routing.html): set similar path into one js file and export it ([example](./node-crash-course/app_with_router.js))

### Tips

- twice ctrl+c to exit node in terminal
- run js file using `node xxx.js`
- install package globally need `sudo npm install -g <package_name>`
- install packages locally need `package.json` file by using `npm init`
- install all the packages need `npm install`, it will install all the packages listed in `package.json`

### Related Courses

- [**JavaScript course**](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc)
- [**HTML & CSS Course**](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
