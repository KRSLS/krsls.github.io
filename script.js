function scrollToID(id) {
    document.getElementById(id).scrollIntoView();
}

function navBarBorderOnScroll() {
	if(document.getElementById("nav").style.top === '0px')
	{
		console.log('f');
	}
}