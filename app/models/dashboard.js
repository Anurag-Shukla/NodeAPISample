var mongoose = require('mongoose');

var dashboardSchema = new mongoose.Schema({
		layoutId:String,
        layoutName:String,
		layoutGridsterOptions:{
		         lanes: Number,
				 direction: String,
                 widthHeightRatio: Number,
				 shrink: Boolean,	
                 responsiveView: Boolean,
				 dragAndDrop: Boolean,	
				 resizable: Boolean,
                 useCSSTransforms: Boolean,
                 floating: Boolean,
                 Tolerance:String,	
				 ResizeHandlesS:Boolean,
				 ResizeHandlesE:Boolean,
				 ResizeHandlesSE:Boolean,
				 responsiveDebounce: Number,
                 responsiveOptions: [{
										breakpoint: String,
									    minWidth: Number,
										lanes: Number
									}],
				 minWidth:Number,
				 breakpoint:String
		},
        layoutGridsterDraggableOptions:{
		         handlerClass: String
		},
		layoutWidgetData:[{
			x: Number, 
			y: Number, 
			w: Number, 
			h: Number,
			dragAndDrop: Boolean,
			resizable: Boolean,
			chart:{
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
			},
			title: String,
			xLg:Number,
			yLg:Number,
			xSm:Number,
			ySm:Number,
			xMd:Number,
			yMd:Number,
			xXl:Number,
			yXl:Number
			
     }]
});
dashboardSchema.index({ layoutId: 1}, { unique: true });

module.exports = mongoose.model('Dashboard', dashboardSchema,'SavedDashboards');