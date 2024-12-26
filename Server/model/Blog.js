const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required:[true, 'Title is Required'],
        trim:true,
        validate: {
            validator: function(value) {
                return value.trim().length > 0;
            },
            message: 'Title cannot be empty',
        }        
    },
    description: {
        type: String,
        required:[true, 'description is Required'],
        trim: true,
        validate: {
            validator: function(value) {
                return value.trim().length > 0;
            },
            message: 'description cannot be empty',
        }     
    },
    date: {
        type: Date,
        default: Date.now
    }
    
},
{ versionKey: false }
)

module.exports = mongoose.model("Blog",blogSchema);