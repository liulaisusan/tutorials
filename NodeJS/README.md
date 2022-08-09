# Node.js

Tutorial from https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=1&ab_channel=TheNetNinja

## Node.js intro

JS is a more abstract programming language which can not directly run on a machine but in a browser with the help of V8. NodeJS is a wrapper written in C++ so that allows JS can run on a machine without a website front end.

### Role of Node.js

Run JS on server side and handle the request from website front-end.

### Crash course

- [**global object**](https://www.geeksforgeeks.org/node-js-global-objects/#:~:text=server%2Dside%20scripting.-,Node.,without%20importing%20any%20particular%20module.)
- [**Module export and import**](https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/): [example](./node-crash-course/modules.js)
- [**file system**](https://nodejs.org/api/fs.html): [example](./node-crash-course/files.js)
- [**streams and buffer**](https://nodesource.com/blog/understanding-streams-in-nodejs/): for large amounts of data [example](./node-crash-course/streams.js)

### Tips

- twice ctrl+c to exit node in terminal
- run js file using `node xxx.js`
