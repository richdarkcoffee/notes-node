console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding note...\nTitle: ',title, '\nBody: ', body);
    // created an array and an object
    var notes = [];
    var note = {
        title,
        body
    }
    // Added try-catch to catch if file does not exist. If it doesn't,
    // the function just moves on and reads the file in
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    //  is the same as the following...
    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // })
    if (duplicateNotes.length === 0) {
        notes.push(note); // Pushes the note passed into addNote into the array of objects
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log(`${title} already exists. Note not added!`);
    }
}

var getAll = () => {
    console.log('Here is a list of all of the notes.');
}

// Notice how to capture an exception when title is undefined
var getNote = (title) => {
    if (title===undefined) {
        console.log('No title specified!')
    } else {
        console.log(`Here is the note titled: "${title}"`);
    }
}

// Notice how to capture an exception when title is undefined
var removeNote = (title) => {
    if (title===undefined) {
        console.log('No title specified!')
    } else {
        console.log(`Are you sure you want to remove note titled: "${title}"?`);
    }
}

// Notice how the module.exports statement changed here 
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};


