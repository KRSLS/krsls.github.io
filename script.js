function scrollToID(id) {
  document.getElementById(id).scrollIntoView();
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
  var scale = scrollY * 0.04;
  // if scroll value is smaller than then rotate image
  if (scale < 30) {
    document.getElementById("kiipMobile").style.transform =
      "rotate(" + scale + "deg)";
  }
});

window.addEventListener("load", (event) => {
  document.getElementById("navMobile").style.display = "none";
});
