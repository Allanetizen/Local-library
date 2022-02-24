// The model should have a String SchemaType called name to describe the genre.
// This name should be required and have between 3 and 100 characters.
// Declare a virtual for the genre's URL, named url.
// Export the model.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GenreSchema = new Schema(
    {
        name:{type: String, required: true, minLength:3, maxLength:100},
    
    }

);
//virtual for genre schema
GenreSchema.virtual('url').get(function(){
    return '/catalog/genre/'+ this._id;
})

//export model
module.exports = mongoose.model('Genre',GenreSchema )
