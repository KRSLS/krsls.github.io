var viewProject = 0;

function navigateProject(index) {
    //gather all the elements by class name
    const navProjects = document.getElementsByClassName("navProject");
    const projects = document.getElementsByClassName("project");

    //set viewing project index
    viewProject = index;

    //add 'active' effect (class) to clicked nav button
    for (let i = 0; i < navProjects.length; i++) {
        if (i !== index) {
            navProjects[i].classList.remove('navActiveText');
        }
        else {
            navProjects[i].classList.add('navActiveText');
        }
    }

    //show / hide projects based on index
    for (let i = 0; i < projects.length; i++) {
        if (i !== index) {
            projects[i].classList.remove("projectShow");
        }
        else {
            projects[i].classList.add("projectShow");
        }
    }

    //debug current viewing project
    console.log(`Viewing project: ${index}`);
}

//on window load
window.addEventListener("load", (e) => {
    //get footer doc
    var footer = document.getElementById("footer");
    //create a new date (now)
    const d = new Date();
    //save the current date year
    let year = d.getFullYear();
    //change footer to current year
    footer.innerHTML = `Copyright © KRSLS - ${year}`;
});

function scrollToID(id) {
    document.getElementById(id).scrollIntoView();
}

var enableZoom = false;
var zoom = false;
function enlargeImage(id) {
    if (enableZoom) {
        if (window.window.innerWidth > 675) {
            zoom = !zoom;

            if (zoom) {
                // document.getElementById(id).style.transform = `scale(1.5)`;
                document.getElementById(id).classList.add('imageEnlarge');
            }
            else {
                // document.getElementById(id).style.transform = `scale(1)`;
                document.getElementById(id).classList.remove('imageEnlarge');
            }
        }
    }
}