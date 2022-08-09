const fs = require('fs');

// reading files
// first para: relative path to the file
// second para: function will be executed when readfile finished. asynchron
// the function has two para, an error and the data from the file
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data); // this data is a buffer, need to change to string
//     console.log(data.toString());
// });

// // readFile is an asychroned function, which will not block the other exectution.
// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// });

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) console.log(err);
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) console.log(err);
        console.log('folder created');
    })
}


// deleting files
if (fs.existsSync('./docs/deletesme.txt')) {
    fs.unlink('./docs/deletesme.txt', (err) => {
        if (err) console.log(err);
        console.log('file deleted');
    })
}
