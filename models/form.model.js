const mongoose = require('mongoose');

const helpForm = new mongoose.Schema(
    {
        email: {type: String},
        problems: {type: String}
    },
    {collection: 'form-Data'}
)

const model = mongoose.model('FormData', helpForm);
module.exports = model
