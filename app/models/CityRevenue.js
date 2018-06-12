var mongoose = require('mongoose');




var medataSchema = new mongoose.Schema({
		name:String

	});

var dataSchema = new mongoose.Schema({
	      city:String,
		  revenue:Number
	});

var cityrevenueSchema = new mongoose.Schema({
        rows:[dataSchema],
		metaData:[medataSchema]
		        });
				
				
cityrevenueSchema.index({ _id:1}, { unique: true });

module.exports = mongoose.model('Cityrevenue', cityrevenueSchema,'desiredapi');