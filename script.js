// document.querySelector("#painting").classList.add("animate")
// document.querySelector("#painting").classList.remove("animate")

// on click theres a value for the class attribute for the painting element
// set the value to the empty string
// because theres no animate class on it it stops the animation,className = ''
// the next two lines is to put a idem potent function

var painting = document.querySelector("#painting")

document.querySelector("#hella_original").addEventListener("click", function() {
// console.log("clicked");
	painting.className = ''
	painting.classList.add("animate")
	painting.classList.add("animate-original")
})

document.querySelector("#hella_tropical").addEventListener("click", function() {
// console.log("clicked");
	painting.className = '' // reset
	painting.classList.add("animate")
	// document.querySelector("#painting").classList.add("animate")
	painting.classList.add("animate-tropical")
})