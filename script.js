function scrollToID(id) {
  document.getElementById(id).scrollIntoView();
}

function turnDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");

  document.getElementById("kiipGlow").classList.toggle("kiipGlowDark");
}

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  // if scroll is greater than then show fixed navbar
  if (window.scrollY > 125) {
    document.getElementById("navMobile").style.display = "block";
  } else if (window.scrollY < 125) {
    document.getElementById("navMobile").style.display = "none";
  }

  // save scroll value and adjust to smaller number
  var rotValue = scrollY * 0.04;
  // if scroll value is smaller than then rotate image
  if(rotValue < 0)
  {
    rotValue = 0;
  }
  if (rotValue < 30) {
    // change the rotation of the document
    document.getElementById("kiipMobile").style.transform =
      "rotate(" + rotValue + "deg)";
  }

  // as we scroll then lower the opacity to document
  var opacity = 1;
  opacity -= scrollY * 0.001;
  // dont allow the opacity to me more than 1 and less than 0
  if (opacity > 1) {
    opacity = 1;
  }
  else if (opacity < 0) {
    opacity = 0;
  }
  // change the opacity of document
  document.getElementById("kiipMobile").style.opacity = opacity;
});

window.addEventListener("load", (event) => {
  document.getElementById("navMobile").style.display = "none";
});
