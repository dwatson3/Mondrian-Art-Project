// document.querySelector("#painting").classList.add("animate")
// document.querySelector("#painting").classList.remove("animate")

// on click theres a value for the class attribute for the painting element
// set the value to the empty string
// because theres no animate class on it it stops the animation,className = ''




document.querySelector("#hella_original").addEventListener("click", function() {
// console.log("clicked");
	document.querySelector("#painting").className = ''
	document.querySelector("#painting").classList.add("animate")
	document.querySelector("#painting").classList.add("animate-original")
})

document.querySelector("#hella_tropical").addEventListener("click", function() {
// console.log("clicked");
	document.querySelector("#painting").className = '' // reset
	document.querySelector("#painting").classList.add("animate")
	document.querySelector("#painting").classList.add("animate-tropical")
})