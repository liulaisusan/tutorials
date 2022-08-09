const xyz = require('./people'); // import module with relative path
// with import will automaticly look for the file and execute the file
// without export, the content in the imported file can't be accessed

console.log(xyz.people, xyz.ages); // only return what is exported

const { people } = require('./people'); // destruct import

console.log(people);

const os = require('os'); // build-in modules
console.log(os.platform(), os.homedir());