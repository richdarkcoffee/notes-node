console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note...\nTitle: ',title, '\nBody: ', body);
}

var listNotes = () => {
    console.log('Here is a list of all of the notes.');
}

// Notice how to capture an exception when title is undefined
var readNote = (title) => {
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
    listNotes,
    readNote,
    removeNote
};


