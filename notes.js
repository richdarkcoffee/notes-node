console.log('Starting notes.js');

module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note'
};

module.exports.add = (a, b) => {
    if (!(isNaN(a)) && !(isNaN(b))) {
        return a + b;
    }
    else {
        console.log('One or both variables are not numbers.')
    }
}

console.log(module);