var mongoose = require('mongoose');


var newDashboardSchema = new mongoose.Schema({
		layoutId:String,
        layoutName:String,
		gridsterOptions:{
		            direction: String,
					lanes: Number,
					widthHeightRatio: Number,
					heightToFontSizeRatio: Number,
					dragAndDrop: Boolean,
					itemSelector: String,
					resizable: Boolean,
					resizeHandles: {
						s: Boolean,
						e: Boolean,
						n: Boolean,
						w: Boolean,
						se: Boolean,
						ne: Boolean,
						sw: Boolean,
						nw: Boolean,
					},
					shrink: Boolean,
					floating: Boolean,
					responsiveView: Boolean,
					responsiveDebounce: Number,
					breakpoint: String,
					minWidth: Number,
					useCSSTransforms: Boolean,
					cellHeight: Number,
					cellWidth: Number,
					tolerance: String,
                    responsiveOptions: [{
										direction: String,
										lanes: Number,
										widthHeightRatio: Number,
										heightToFontSizeRatio: Number,
										dragAndDrop: Boolean,
										itemSelector: String,
										resizable: Boolean,
										resizeHandles: {
											s: Boolean,
											e: Boolean,
											n: Boolean,
											w: Boolean,
											se: Boolean,
											ne: Boolean,
											sw: Boolean,
											nw: Boolean,
										},
										shrink: Boolean,
										floating: Boolean,
										responsiveView: Boolean,
										responsiveDebounce: Number,
										breakpoint: String,
										minWidth: Number,
										useCSSTransforms: Boolean,
										cellHeight: Number,
										cellWidth: Number,
										tolerance: String,
									}]
		},
        draggableOptions:{
		            handlerClass: String,
					zIndex: Number,
					scroll: Boolean,
					scrollEdge: Number,
					containment: String,
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
newDashboardSchema.index({ layoutId: 1}, { unique: true });

module.exports = mongoose.model('NewDashboard', newDashboardSchema,'DashboardData');