function scrollToID(id) {
	document.getElementById(id).scrollIntoView();
}

window.addEventListener("scroll", () => {
	console.log(window.scrollY);

	if (window.scrollY > 125) {
		document.getElementById('navMobile').style.display = 'block';
	}
	else if (window.scrollY < 125) {
		document.getElementById('navMobile').style.display = 'none';
	}
});