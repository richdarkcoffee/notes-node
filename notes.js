console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note...\nTitle: ',title, '\nBody: ', body);
}

// Notice how the module.exports statement changed here 
module.exports = {
    addNote
};


