function scrollToID(id) {
    document.getElementById(id).scrollIntoView();
}

var showBio = true;

function showLatestProject() {

    if (showBio) {
        document.getElementById("bio").style.display = "none";
        document.getElementById("latestproject").style.display = "block";
    }
    else if (!showBio) {
        document.getElementById("bio").style.display = "block";
        document.getElementById("latestproject").style.display = "none";
    }

    showBio = !showBio;
}