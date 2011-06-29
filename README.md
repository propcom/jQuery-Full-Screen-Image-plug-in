jQuery Full Screen Image plug-in
================================

Introduction
------------

Large imagery has become a huge trend in web design of recent years, be it via the original use within flash based websites to recent time where people are truly utilising the power of JavaScript. With its prominence so large within web design, one would expect there to be several plug-ins already on the market to deal with full screen imagery. However, this is simply not the case, most plug-ins we came across either did not have the browser support that we desired or it fell short of the functionality we required. Therefore we decided to build a plug-in that could fill the void in the market. 

Features
--------

* Auto-resizing so your image always maintains is aspect ratio and fills the screen
* Auto-repositioning so that your image is always centrally aligned within the browser window. (This option can be disabled to position the image to the top right of the window)
* Offset functionality in case you have content that you do not wish to affect the image scaling. i.e. A  fixed, left aligned navigation can be accounted for and the image plug-in will take this width into account
* A built in overlay that is activated when the browser window is larger than the original image size. The overlay has been designed to help reduce how pixelated images look when being resized. (This option can also be disabled)

Browser support
---------------

* Chrome
* Mozilla Firefox 3 and above 
* Internet Explorer 6-9 (Due to IE6 not supporting position: fixed a fix for IE6 where by the full screen image is absolutely position and then follows the scroll top of the page)
* Safari 3 and above
* Opera 9 and above

How to Install
--------------

### Step one

Download the files for the full screen plug-in from above. There are two choices, either take the already minified version, or if you wish to have a look and add your own functionality download the full source code.

### Step two

In the head of your document add the style sheet for the plug-in.

	<link rel="stylesheet" type="text/css" href="css/full-screen-image.css" />

Or simply add the following to your style sheet.

	#full-screen-image {
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		overflow:hidden;
		z-index:0;
	}
		#full-screen-image img {
			position:absolute;
			top:0;
			left:0;
			z-index:2;
		}

		#full-screen-image #overlay {
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:url('../images/overlay.png') repeat;
			z-index:5;
		}

Notice the id being used for the full screen div is #full-screen-image. It is worth mentally noting this one.

### Step three

For the next step it is entirely dependent on how you work, JavaScript should be included at the bottom of your page before the </body> tag to help with page load speeds. However, many people still work with all of their JavaScript in the head, so do what works best for you.

	<script type="text/javascript" src=" //ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script> 
	<script type="text/javascript" src="js/full-screen-image.js"></script>

These two lines set up both jQuery and the plug-in.

### Step four

All that is left for us to do is initialise the full screen plug-in, to do this simply type the following below your JavaScript includes.

	<script type="text/javascript">
		jQuery(function($){
			$('#full-screen-image').fullSizeImage()
		});
	</script>

Your plug-in should be now fully setup and working correctly.

Plug-in options
---------------

The demo for the plug-in has been set up in a way that you can simply punch in your options and generate the code you need to include in your head.

To view the demo simply click [here][1]

If you wish to set the extra options without using the demo, the following documentation will take you through what is available.

### Options available for the Full Screen plug-in

	repositionImage:	Boolean (default:true)
If set to false this will display auto positioning of the image, therefore the image will be fixed to the top right of the browser window.

	overlayLine: 	Boolean (default:true)
If set to false this will disable the overlay for when the browser window is bigger than the original size of the image.

	offset: 		"X,Y" (default: "0,0")
This should be set in an x, y value. It determines the difference of the offset for the full screen image. To full understand this it is good to view the [live demo][1] and play around with the value. View the demo here.

### Examples of how to apply the options

To set the plug-in so that auto repositioning is disabled simply do the following:

	$('#full-screen-image').fullSizeImage({
		repositionImage: false
	});

If you want to set more than one option at a time you must do the following but bear in mind that the order of the options must be as shown above:

	$('#full-screen-image').fullSizeImage({
		repositionImage: false,
		overlayLine: false
	});

In the following example all of the options will be set:

	$('#full-screen-image').fullSizeImage({
		repositionImage: false,
		overlayLine: false,
		offset : "150, 180"
	});

[1]: http://linux.propelleremail.co.uk/builds/full-screen-image