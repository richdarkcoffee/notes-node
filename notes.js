console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note...\nTitle: ',title, '\nBody: ', body);
}

var listNotes = (title) => {
    if (title==='') {
        console.log('Here are all of the notes.');
    } else {
        console.log(`Here is the note titled: "${title}"`);
    }
    
}
// Notice how the module.exports statement changed here 
module.exports = {
    addNote,
    listNotes
};


