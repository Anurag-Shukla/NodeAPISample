var mongoose = require('mongoose');

var schemaOptions = {
   '_id':0
};

var apischema = new mongoose.Schema({
  schoolName: String,
  value:   String,
},
schemaOptions);

module.exports = mongoose.model('Apidata', apischema,'apidata');