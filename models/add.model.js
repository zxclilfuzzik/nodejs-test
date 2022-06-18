const mongoose = require('mongoose');

const addForm = new mongoose.Schema(
    {
        artist: {type: String},
        track: {type: String}
    },
    {collection: 'add-Data'}
)

const model = mongoose.model('addData', addForm);
module.exports = model
