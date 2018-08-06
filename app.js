console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();

var res = notes.addNote();
console.log(res);

var addnumbers = notes.add(3,4);
console.log(addnumbers);

console.log('Result: ', notes.add(6,-10));

// You need to provide a callback function to handle an error if the
// application is unable to write to the file. Possible write problems
// include file not created or file/directory permissions
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });

// Alternatively, you can use the appendFileSync function if you don't
// want to throw an error if the file needs to be created
// fs.appendFileSync('greetings.txt','Hello world!');
