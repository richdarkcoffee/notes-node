console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    // Added try-catch to catch if file does not exist. If it doesn't,
    // the function just moves on and reads the file in
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


var addNote = (title, body) => {
    // console.log('Adding note...\nTitle: ',title, '\nBody: ', body);
    // created an array and an object
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);
    //  is the same as the following...
    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // })
    if (duplicateNotes.length === 0) {
        notes.push(note); // Pushes the note passed into addNote into the array of objects
        saveNotes(notes);
        return note;
    } 
    // else {
    //     console.log(`${title} already exists. Note not added!`);
    // }
}

var getAll = () => {
    var notes = fetchNotes();

    console.log('Here is a list of all of the notes.');
    
    notes.forEach(element => {
        console.log(`\n---\n${element.title}\n---\n${element.body}`)
    });    
}

// Notice how to capture an exception when title is undefined
var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    console.log(filteredNotes[0]);
    return filteredNotes[0];
    // if (title===undefined) {
    //     console.log('No title specified!')
    // } else {
    //     console.log(`Here is the note titled: "${title}"`);
    // }
}

// Notice how to capture an exception when title is undefined
var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes
    var filteredNotes = notes.filter((note) => note.title !== title);
    // removing note with title of arguement
    // if (notes === filteredNotes) {
    //     return undefined;
    // } else {
    //     saveNotes(filteredNotes);
    //     return title;
    // }
    // He did this better
    // if (notes.length === filteredNotes.length) {
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

// Notice how the module.exports statement changed here 
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};


