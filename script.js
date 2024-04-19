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
    else if (subject != null && body != null) {
        window.location = 'mailto:ioanniskarasoulas@gmail.com?subject=' + subject + '&body=' + body;
    }
}

var projectIndex = 0;
var projects = [
    p1 = document.getElementById("p1"),
    p2 = document.getElementById("p2"),
    p3 = document.getElementById("p3"),
    p4 = document.getElementById("p4"),
]

function switchProject(where) {

    if (where === 1) {
        if (projectIndex < projects.length - 1) {
            projectIndex++;
        }
        else projectIndex = 0;

        console.log('Switched to project ' + projectIndex);

        for (let index = 0; index < projects.length; index++) {
            if(index === projectIndex)
            {
                projects[index].style.display = "block";
            }
            else if(index !== projectIndex)
            {
                projects[index].style.display = "none";
            }
        }
    }
    else if (where === -1){
        if (projectIndex > 0) {
            projectIndex--;
        }
        else projectIndex = projects.length - 1;

        console.log('Switched to project ' + projectIndex);

        for (let index = 0; index < projects.length; index++) {
            if(index === projectIndex)
            {
                projects[index].style.display = "block";
            }
            else if(index !== projectIndex)
            {
                projects[index].style.display = "none";
            }
        }
    }
}