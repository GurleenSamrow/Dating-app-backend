const mongoose = require('mongoose');
const uuid = require('uuid');

const adminSchema = new mongoose.Schema({
    heading: {
        type: String,
    },
    description: {
        type: String,
    },
    images: {
        type: Array,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('blog', adminSchema);

