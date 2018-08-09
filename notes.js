console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note...\nTitle: ',title, '\nBody: ', body);
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


