console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash')

const notes = require('./notes.js');

var command = process.argv[2];

// Here we did three tests of additional arguements:
node app.js remove --title=secrets
node app.js remove --title secrets
node app.js remove --title="secrets"
node app.js remove --title "secrets"
// Return values respectively:
// [ '/usr/local/Cellar/node/10.8.0/bin/node',
//   '/Users/richardc/Code/NodeJS-Training/notes-node/app.js',
//   'remove',
//   '--title=secrets' ]
// [ '/usr/local/Cellar/node/10.8.0/bin/node',
//   '/Users/richardc/Code/NodeJS-Training/notes-node/app.js',
//   'remove',
//   '--title=secrets' ]
//   [ '/usr/local/Cellar/node/10.8.0/bin/node',
//   '/Users/richardc/Code/NodeJS-Training/notes-node/app.js',
//   'remove',
//   '--title=secrets' ]
//   [ '/usr/local/Cellar/node/10.8.0/bin/node',
//   '/Users/richardc/Code/NodeJS-Training/notes-node/app.js',
//   'remove',
//   '--title',
//   'secrets' ]


console.log(process.argv);

if(command === 'add') {
    console.log('Adding new note.')
} else if (command === 'list') {
    console.log('Listing notes.')
} else if (command === 'read') {
    console.log('Reading note.')
} else if (command === 'remove') {
    console.log('Removing note.')
}
else {
    console.log('Command not recognized.')
}

console.log('Command: ', command);