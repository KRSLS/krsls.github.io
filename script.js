function scrollToID(id) {
  document.getElementById(id).scrollIntoView();
}

// opacity stuff
var opacityCoff = 0.001;

// scale stuff
var scaleCoff = 0.8;

// blur stuff
var blurAmount = 0;
var maxBlurAmount = 4;
var minBlurAmount = 0;
var blurCoff = 0.001;
var blurDecreaseCoff = 150;

// handle blur
function handleBlur() {
  // if the blur amount is above 0 then try to lower it
  if (blurAmount > minBlurAmount) {
    blurAmount -= blurDecreaseCoff;
  }

  // if the blur amount is minus - then reset it to 0
  if (blurAmount < minBlurAmount) {
    blurAmount = minBlurAmount;
  }
}

// run code every 100ms
setInterval(() => {
  console.log("Blur value: " + blurAmount);

  // apply the style
  document.getElementById("darkModeIcon").style.filter =
    "blur(" + blurAmount + "px)";

  // look up for this :(
  handleBlur();
}, 100);

function turnDarkMode() {
  // enable dark-mode css at the body
  document.body.classList.toggle("bright-mode");
}

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  // animated dark mode icon with scroll position ;)
  document.getElementById("darkModeIcon").style.transform =
    "rotate(" + scrollY * scaleCoff + "deg)";
  // add blur as long as the blur value is lower than 4
  if (blurAmount < maxBlurAmount) {
    blurAmount += scrollY * blurCoff;
  }

  // if scroll is greater than then show fixed navbar
  if (window.scrollY > 125) {
    document.getElementById("navMobile").style.display = "block";
  } else if (window.scrollY < 125) {
    document.getElementById("navMobile").style.display = "none";
  }

  // save scroll value and adjust to smaller number
  var rotValue = scrollY * 0.04;
  // if scroll value is smaller than then rotate image
  if (rotValue < 0) {
    rotValue = 0;
  }
  if (rotValue < 30) {
    // change the rotation of the document
    document.getElementById("kiipMobile").style.transform =
      "rotate(" + rotValue + "deg)";
  }

  // as we scroll then lower the opacity to document
  var opacity = 1;
  opacity -= scrollY * opacityCoff;
  // dont allow the opacity to me more than 1 and less than 0
  if (opacity > 1) {
    opacity = 1;
  } else if (opacity < 0) {
    opacity = 0;
  }
  // change the opacity of document
  document.getElementById("kiipMobile").style.opacity = opacity;
});

window.addEventListener("load", () => {
  document.getElementById("navMobile").style.display = "none";

  // get current date and save it
  var currentDate = new Date();

  // raw format of the date
  var dayRaw = currentDate.getDay();
  var dateRaw = currentDate.getDate();
  var monthRaw = currentDate.getMonth();
  var yearRaw = currentDate.getUTCFullYear();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var dateString = `${days[dayRaw]}, ${dateRaw} of ${month[monthRaw]}`;

  var dateDoc = document.getElementById("d");
  dateDoc.innerHTML = dateString;

  // set footers year
  document.getElementById("footerYear").innerHTML =
    `Created by Karasoulas - ${yearRaw}`;
});
