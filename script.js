// document.querySelector("#painting").classList.add("animate")
// document.querySelector("#painting").classList.remove("animate")

// on click theres a value for the class attribute for the painting element
// set the value to the empty string
// because theres no animate class on it it stops the animation,className = ''
// the next two lines is to put a idem potent function

var painting = document.querySelector("#painting")

document.querySelector("#hella_original").addEventListener("click", function() {
// console.log("clicked");
	painting.className = '';
	painting.classList.add("animate");
	painting.classList.add("animate-original");
	emptyBackgroundImage();
	emptyVideo();
})

document.querySelector("#hella_tropical").addEventListener("click", function() {
// console.log("clicked");
	painting.className = '' // reset
	painting.classList.add("animate");
	painting.classList.add("animate-tropical");
	emptyBackgroundImage();
	emptyVideo();
})

document.querySelector("#wild-card").addEventListener("click", function() {
	painting.className = '' // reset
	painting.classList.add("square");
	wildCardGallery();
	youtubeVideo();
})

	// painting.classList.remove("square")[i]


// document.querySelector("#wild-card").addEventListener("click", function() {
// // console.log("clicked");
// 	painting.className = '' // reset
// 	painting.add(wildCardGallery()
// 	// document.querySelector("#painting").classList.add("animate")
// 	// painting.classList.add("animate-wild-card")
// 	// wildCardGallery();
// })

function youtubeVideo() {
	var newVideo = document.createElement("iframe");
	  newVideo.classList.add("test")
		newVideo.src = "https://www.youtube.com/embed/BpNcmh3rxko";
		newVideo.height = "380px";
		newVideo.width = "300px";
	var sweetVideo = document.getElementById("sweet-video");
	console.log(newVideo)
	sweetVideo.appendChild(newVideo);
};

function emptyVideo() {
	var removeVideo = document.getElementById("sweet-video");
	removeVideo.innerHTML = "";
}

function wildCardGallery() {
	var grabThosePics = document.querySelectorAll(".square");
		for (var i = 1; i < grabThosePics.length; i++) {
			var string = "img" + i + ".jpg"
			grabThosePics[i].style.backgroundImage = "url(" + string + ")";
			grabThosePics[i].classList.add("final")
	}
}

function emptyBackgroundImage() {
	var grabThosePics = document.querySelectorAll(".square");
		for (var i = 0; i < grabThosePics.length; i++) {
			// grabThosePics[i].style.backgroundImage = "url(" + string + ")";						
			grabThosePics[i].style.backgroundImage = "";	
			// grabThosePics[i].classList.add("final")
	}
}




