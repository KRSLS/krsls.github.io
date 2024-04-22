function scrollToID(id) {
	document.getElementById(id).scrollIntoView();
}

window.addEventListener("scroll", () => {
	// console.log(window.scrollY);

	if (window.scrollY > 125) {
		document.getElementById('navMobile').style.display = 'block';
	}
	else if (window.scrollY < 125) {
		document.getElementById('navMobile').style.display = 'none';
	}

	var s = window.scrollY * 0.05;
	console.log(s);
	document.getElementById('kiipMobile').style.transform = "rotate("+s+"deg)";
});

window.addEventListener('load', (event) => {
	document.getElementById('navMobile').style.display = 'none';
});