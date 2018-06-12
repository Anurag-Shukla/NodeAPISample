var mongoose = require('mongoose');

var metaschema = new mongoose.Schema({
			svg_id:String,
			svgwidth:Number,
			svgheight:Number,
			charttype:String,
			color:String,
			margin:{
                  top:Number,
                  botton:Number,
                  left:Number,
                  right:Number,
				  transport:String
				},
			axisX:{
				 parameter:String,
                 label:String,
                 color:String,
                 fontsize:Number,
                 labelcolor:String,
				 transport:String
				},
			axisY:{
				  parameter:String,
            	  label:String,
	              color:String,
	              fontsize:Number,
	              labelcolor:String
				},				
			endpoint:String

	});

module.exports = mongoose.model('Metadata', metaschema,'chartmetadata');