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
