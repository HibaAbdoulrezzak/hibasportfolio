window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("stickyHeader", window.scrollY > 0);
});

var mobile = document.createElement("div");
mobile.className = "stickyHeader";
document.querySelector(".stickyHeader").appendChild(mobile);

const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
	navUL.classList.toggle("show");
});
