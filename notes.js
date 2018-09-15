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
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note); // Pushes the note passed into addNote into the array of objects
        saveNotes(notes);
        return note;
    } 
}

var getAll = () => {
    var notes = fetchNotes();
    console.log('Here is a list of all of the notes.');
    notes.forEach(element => {
        logNote(element);
    });    
}

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}

// Notice how to capture an exception when title is undefined
var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    // Learned about chrome://inspect in Chrome
    // Ran node --inspect-brk on application
    // Set debug breakpoint below
    // and used Chrome debugger to print note
    debugger;
    console.log(`---\n${note.title}\n---\n${note.body}`);
}

// Notice how the module.exports statement changed here 
module.exports = {
    addNote,
    getAll,
    getNote,
    logNote,
    removeNote
};


