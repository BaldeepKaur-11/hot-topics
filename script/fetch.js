//getting references to the interactive elements of the page
let navItems = document.querySelectorAll('.nav');
let container = document.querySelector(".container");

//saving the path to initial content into variable:
let url = "http://127.0.0.1:49549/testing-ajax/content/partial-1.html";


// function that runs when one of the links is clicked
function changePage(e) {
	// removes default behaviour of link
	e.preventDefault();
	
	//collect the value of href attr of clicked link
	//use target property of event object to get the reference to 
	//the clicked link:
	let clickedLink = ...;
	
	//access the value of href attribute and overwrite the current value 
	//inside the url variable
	url = clickedLink.href;
	
	//run ajax request everytime a link clicked
	handleAjax();
}

//registering links for click event
for (let navItem of navItems) {
	navItem.addEventListener("click", changePage);
}

//function that handles async request
function handleAjax() {
	// data iside the package naed promise
	fetch(url)
		.then(function (rsp) {
			return rsp.text();
		})
		.then(function (data) {
			container.innerHTML = data;
		});
}

//call the function for the first time to load the 
//initial content
handleAjax();