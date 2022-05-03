'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


var journalSchema = Schema( {
    date: String,
    time: String,
    emotion: String,
    journal: String,
    hours_slept: Number,
    userId: ObjectId,
    createdAt: Date,

} );

module.exports = mongoose.model( 'Journal', journalSchema ); 
