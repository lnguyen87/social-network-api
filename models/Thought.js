const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema ({

});


// create Thought model using ThoughtSchema
const Thought = model('Thought', ThoughtSchema);


// export Thought model
module.exports = Thought;