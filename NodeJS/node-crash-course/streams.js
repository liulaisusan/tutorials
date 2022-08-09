const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' }); // option para is encoding rules ...
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => { // event listener, when recive data buffer from readStream, the callback will fire
//     console.log('---new chunk---');
//     console.log(chunk);
//     writeStream.write('\nNew chunk\n');
//     writeStream.write(chunk);
// });

//piping

readStream.pipe(writeStream); // from a readable stream to a writable stream