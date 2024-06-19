const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
 
// Get the modal
var modal = document.getElementById("authModal");

// Get the link that opens the modal
var loginLink = document.querySelector('a[href="#hero"]');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the forms and the toggle links
var loginForm = document.getElementById("loginForm");
var signUpForm = document.getElementById("signUpForm");
var showSignUp = document.getElementById("showSignUp");
var showLogin = document.getElementById("showLogin");

// When the user clicks the link, open the modal
loginLink.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

// Toggle between forms
showSignUp.onclick = function(event) {
  event.preventDefault();
  loginForm.style.display = "none";
  signUpForm.style.display = "block";
}

showLogin.onclick = function(event) {
  event.preventDefault();
  loginForm.style.display = "block";
  signUpForm.style.display = "none";
}