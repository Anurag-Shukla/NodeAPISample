var mongoose = require('mongoose');

var graphschema = new mongoose.Schema({
		svgid:String,
        svgwidth:Number,
        svgheight:Number,
        charttype:String,
        color:String,
        axisyparameter:String,
        axisylabel:String,
        axisycolor:String,
        axisyfontsize:Number,
        axisylabelcolor:String,
        axisxparameter:String,
        axisxlabel:String,
        axisxcolor:String,
        axisxfontsize:Number,
        axisxlabelcolor:String,
        margintop:Number,
        marginbottom:Number,
        marginleft:Number,
        marginright:Number,
        endpoint:String

	});
	
graphschema.index({ svgid: 1, charttype: 1,endpoint:1}, { unique: true });

module.exports = mongoose.model('Graphdata', graphschema,'graphdata');