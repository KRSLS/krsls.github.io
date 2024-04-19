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

function sendEmail() {

    var subject = document.getElementById("emailSubject").value;
    var body = document.getElementById("emailBody").value;

    if (subject === '' || body === '') {
        alert('You need to enter a name & subject.')
    }
    else if(subject != null && body != null){
        window.location = 'mailto:ioanniskarasoulas@gmail.com?subject=' + subject + '&body=' + body;
    }

}