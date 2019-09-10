var photos = {
	"img": ["Photos/img1.jpg", "Photos/img2.jpg", "Photos/img3.jpg", "Photos/img4.jpg",
		  "Photos/img5.jpg", "Photos/img6.jpg", "Photos/img7.jpg", "Photos/img8.jpg",
		  "Photos/img9.jpg", "Photos/img10.jpg", "Photos/img11.jpg", "Photos/img12.jpg",
		  "Photos/img13.jpg", "Photos/img14.jpg", "Photos/img15.jpg", "Photos/img16.jpg",
		  "Photos/img17.jpg", "Photos/img18.jpg", "Photos/img19.jpg", "Photos/img20.jpg"],
	"caption": ["Shopping in India", "Sandwich",	"Dress Shopping", "Farm", "Palm Tree", "Railway Station", "Famous Milkshakes", "Airplane View", 
				"Temple in Gondal", "Temple in Sarangpur", "India Gate", "India Gate", "Temple in Gondal", "temple in Sarangpur", "Temple in Ahemdabad","Temple in Ahemdabad", 
				"Temple in Gadhada", "Temple flag", "Temple in Mumbai", "Temple in Vadtal"]
};

var shuffle = false;

var slideshow = document.getElementById('slideshow');
var effects = document.getElementById("effect");
var prevArrow = document.getElementById('prevArrow');
var nextArrow = document.getElementById('nextArrow');
var pIndex = document.getElementById("pIndex");
var pCaption = document.getElementById("pCaption");
var playStop = document.getElementById("playStop");
var shuff = document.getElementById("shuffle");

var x = slideshow.getContext('2d');

var a = 0.00;
var interval;
var index = 0;
var play = false;


window.onload = function()
{
	loadImage();
}

function loadImage()
{
    clearInterval(interval);
	x.clearRect(0,0, slideshow.width, slideshow.height);

	var pic = new Image();
	pic.onload = function() {
    	pEffect(pic)
    };
	
	pic.src = photos.img[index];

	caption();

}
 function caption(){
 	var num = index + 1;
	pIndex.textContent = "Photo #" + num;
	pCaption.textContent = photos.caption[num -1 ];
 }

function pEffect(pic)
{
	if(effects.value == "none")
		displayImage(pic);
	else if (effects.value == "fade")
	{
		a = 0.00;
		interval = setInterval(function(){ displayImage(pic) }, 60);
	}
}

function displayImage(pic)
{
	if(effects.value === "fade"){
		a = a + 0.01;
		x.globalAlpha = a;
		x.drawImage(pic, 0, 0, slideshow.width, slideshow.height);
	
	}else{
		a = 1;
		x.globalAlpha = a;
		x.drawImage(pic, 0, 0, slideshow.width, slideshow.height);
	}
}


prevArrow.onclick = function() 
{
	if(shuffle) return shuffleImage();

	if(index == 0)
		index = 19;
	else
		index--;
	loadImage();
}


nextArrow.onclick = function() 
{
	if(shuffle) return shuffleImage();

	if(index == 19)
		index = 0;
	else
		index++;
	loadImage();
}

playStop.onclick = function(){
	if(playStop.innerHTML === "Play"){
		playStop.innerHTML = "Stop";
		play = true;
		if(shuffle){
			playRandom();
		}else{
			playSeq();
		}
	}else{
	  	playStop.innerHTML = "Play";
	  	play = false;
	}
}

shuff.onclick = function(){
	if(shuff.innerHTML === "Sequential"){
		shuff.innerHTML = "Shuffle";
		shuffle = true;
	}else{
		shuff.innerHTML = "Sequential";
		shuffle = false;
	}
}

function shuffleImage(){

	var shuffValue = Math.floor(Math.random()*photos.img.length-1);
	
	index = shuffValue;
	
	if(index > -1 ){
		loadImage();
	}

}

function playSeq(){
	if(play){
		if(index < photos.img.length -1 ){
			index++;
			loadImage();
		}else{
			index = 0;
			loadImage();
		}

		setTimeout("playSeq()", 3000);
	}

}

function playRandom(){
	if(play){
		var shuffValue = Math.floor(Math.random()*photos.img.length-1);
		
		index = shuffValue;
		
		if(index > -1 ){
			loadImage();
		}
		setTimeout("playRandom()", 3000);
	}
}
