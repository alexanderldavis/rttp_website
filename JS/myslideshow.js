/*
		Purpose: JS code for slideshow.
		Author: Alexander Davis
		Date: 12/5/16
		Filename: myslideshow.js
*/

var image = ['../IMAGES/SLIDESHOW/slideshowpic-0.jpg', '../IMAGES/SLIDESHOW/slideshowpic-1.jpg', '../IMAGES/SLIDESHOW/slideshowpic-2.jpg', '../IMAGES/SLIDESHOW/slideshowpic-3.jpg', '../IMAGES/SLIDESHOW/slideshowpic-4.jpg', '../IMAGES/SLIDESHOW/slideshowpic-5.jpg', '../IMAGES/SLIDESHOW/slideshowpic-6.jpg', '../IMAGES/SLIDESHOW/slideshowpic-7.jpg'];
var imageNumber = 0;
var imageLength = image.length - 1;
var myShow;

function changeImage(num) {
	imageNumber = imageNumber + num;
	
	//wrap from upper - back to beginning
	if (imageNumber > imageLength) {
		imageNumber = 0;		
	}
	
	//wrap from lower - back to upper
	if (imageNumber < 0) {
		imageNumber = imageLength;
	}
	
	document.getElementById("slideshow").src = image[imageNumber];
}

function auto() {
	myShow = setInterval("changeImage(1)", 2000); // 2000 = 2secs
}

function stop() {
	clearInterval(myShow);
	
}