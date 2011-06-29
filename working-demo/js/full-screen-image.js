// JavaScript Document
// KWOKBOX VERSION 1.0 beta max
(function($){
	var ran =0, 
	origHeight=0, 
	origWidth = 0;
	$.fn.fullSizeImage = function(options, refreshOptions) {

		// this is to keep from overriding our "defaults" object.
		var opts = $.extend({}, $.fn.fullSizeImage.defaults, options),
		base = this,
		baseImg = this.find('img'),
		theOffset = new Array();
		if (ran==0) {
			origHeight = baseImg.height();
			origWidth = baseImg.width();	
		};
		
        base.init = function(){
        	ran++;
        	if(opts.offset!=null) {
        		theOffset = opts.offset.split(',');
        	}
	        if(opts.position=='fixed') {
	        	if ($.browser.msie && $.browser.version.substr(0,1)<7) {
					base.css({
						'position':'absolute',
						'left':parseInt(theOffset[0]),
						'top':parseInt(theOffset[1])
					});
					$(window).bind('scroll',function(){base.scrollPage()});
				} else {
					base.css('position','fixed');
				}
	        }
	        base.resizeImage();
	        $(window).bind('resize',function(){base.resizeImage()});
		};

        base.scrollPage = function(){
	        base.css({
				'top':$(window).scrollTop()
			});
		};	
		
        base.repositionImage = function(){
	        if(opts.offset!=null) {
		        if(opts.position!='fixed') {
		        	baseImg.css({
			        	'left':(($(window).width() - parseInt(theOffset[0]) ) - baseImg.width()) / 2,
			        	'top':(($(document).height() - parseInt(theOffset[1])) - baseImg.height()) / 2
			        });
			    } else {
		        	baseImg.css({
			        	'left':(($(window).width() - parseInt(theOffset[0]) ) - baseImg.width()) / 2,
			        	'top':(($(window).height() - parseInt(theOffset[1])) - baseImg.height()) / 2
			        });
			    }
	        } else {
		        if(opts.position!='fixed') {
		        	baseImg.css({
			        	'left':($(window).width() - baseImg.width()) / 2,
			        	'top':($(document).height() - baseImg.height()) / 2
			        });
			    } else {
		        	baseImg.css({
			        	'left':($(window).width() - baseImg.width()) / 2,
			        	'top':($(window).height() - baseImg.height()) / 2
			        });
			    }
	        }
		};	
		
        base.resizeImage = function(){
        	imageRatio = baseImg.width() / baseImg.height();
        	
        	if( baseImg.width() > $(window).width() ||  baseImg.width() < $(window).width() ){
		        if(opts.offset!=null) {
		        	baseImg.css({
			        	'width': ($(window).width()- parseInt(theOffset[0]) ),
			        	'height': ($(window).width()- parseInt(theOffset[0]) ) / imageRatio
			        });
			    } else {
		        	baseImg.css({
			        	'width': $(window).width(),
			        	'height': $(window).width() / imageRatio
			        });
			    }
        	}
        	
        	if( baseImg.height() < $(document).height() ) {
		        if(opts.position!='fixed') {
		        	if(opts.offset!=null) {
			        	baseImg.css({
				        	'width': $(document).height() * imageRatio,
				        	'height': $(document).height()
				        });
			    	} else {
			        	baseImg.css({
				        	'width': $(document).height() * imageRatio,
				        	'height': $(document).height()
				        });
			    	}
		  	  } else {
		        	if(opts.offset!=null) {
		        		if (($(window).height() - parseInt(theOffset[1])) * imageRatio > ($(window).width()- parseInt(theOffset[0]) )) {
				        	baseImg.css({
					        	'width': ($(window).height() - parseInt(theOffset[1])) * imageRatio,
					        	'height': ($(window).height() - parseInt(theOffset[1]))
					        });
					    };
			    	} else {
			    		if ($(window).width() > $(window).height() * imageRatio) {
			    			
				        	baseImg.css({
					        	'width': $(window).width(),
					        	'height': $(window).width() / imageRatio
					        });
			    		} else {
				        	baseImg.css({
					        	'width': $(window).height() * imageRatio,
					        	'height': $(window).height()
					        });
			    		};
			    	}		
			    }
        	}

	        if(opts.offset!=null) {
	        	base.css({
	        		'left':parseInt(theOffset[0]),
	        		'top':parseInt(theOffset[1]),
	        		'width':($(window).width()- parseInt(theOffset[0]) ),
	        		'height':$(window).height() - parseInt(theOffset[1])
	        	})
	        } else {
	        	base.css({
	        		'width':$(window).width(),
	        		'height':$(window).height()
	        	})
	        }

	        if(opts.repositionImage==true) {
	        	base.repositionImage();
	        	$(window).bind('resize',function(){base.repositionImage()});
	        }

	        if(opts.overlayLine==true) {
	        	if(baseImg.width() > origWidth && $('#overlay').size() < 1) {
	        		$('#full-screen-image').append('<div id="overlay">&nbsp;</div>');
	        	}

	        	if(baseImg.width() < origWidth) {
	        		$('#overlay').remove();
	        	} 

        		$('#overlay').css({
        			'width':base.width(),
        			'height':base.height()
        		})
	        }
		};	

        base.refreshPlugin = function(refreshOptions){
        	$(window).unbind('resize');
        	$.extend(opts, refreshOptions);
	        if(opts.repositionImage==false) {
	        	baseImg.css({'top':'0','left':'0'})
        	}
        	if(opts.overlayLine==false) {
        		$('#overlay').remove();
        	}
			base.init();
        }

		if(options == 'refresh') {
			base.refreshPlugin(refreshOptions);
		} else {
			base.init();	
		}
        	
	};
	
	$.fn.fullSizeImage.defaults = {
		repositionImage : true,
		overlayLine : false,
		offset : null,
		position : 'fixed'
	};
})(jQuery);