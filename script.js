var enableSnackbar = false;
function showSnackBar(text) {
    if (enableSnackbar) {
        var snackBar = document.getElementById('snackbar');
        var snackbarTitle = document.getElementById('snackbarTitle');

        snackbarTitle.innerHTML = text;
        snackBar.style.display = 'block';
    }
}

function closeSnackbar() {
    if(enableSnackbar)
        {
            var snackBar = document.getElementById('snackbar');

    snackBar.style.display = 'none';
        }
}

var darkMode = false;

function switchMode() {
    clearNavigation();

    var body = document.getElementById('body');
    var snackBarTitle = document.getElementById('snackbarTitle');
    var navBar = document.getElementById('navBar');
    var hero = document.getElementById('hero');
    var btn = document.getElementById('btn');
    var btnS = document.getElementsByClassName('btn-s');
    var navigation = document.getElementsByClassName('navigation');
    var project = document.getElementsByClassName('project');
    var projectInfo = document.getElementsByClassName('projectInfo');

    var about = document.getElementById('about');
    var footer = document.getElementById('footer');

    darkMode = !darkMode;

    if (darkMode) {
        document.getElementById('darkModeBTN').innerHTML = 'Dark';
        body.classList.add('bodyBright')
        navBar.classList.add('navBright');
        snackbarTitle.classList.add('snackbarTitleBright');
        hero.classList.add('heroBright');
        btn.classList.add('btnBright');
        for (let i = 0; i < btnS.length; i++) {
            btnS[i].classList.add('btn-sBright');
        }
        for (let i = 0; i < navigation.length; i++) {
            navigation[i].classList.add('navigationBright');
        }
        for (let i = 0; i < project.length; i++) {
            project[i].classList.add('projectBright');
        }
        for (let i = 0; i < projectInfo.length; i++) {
            projectInfo[i].classList.add('projectInfoBright');
        }
        about.classList.add('aboutBright');
        footer.classList.add('footerBright');
    }
    else {
        document.getElementById('darkModeBTN').innerHTML = 'Bright';
        body.classList.remove('bodyBright')
        snackbarTitle.classList.remove('snackbarTitleBright');
        navBar.classList.remove('navBright');
        hero.classList.remove('heroBright');
        btn.classList.remove('btnBright');
        for (let i = 0; i < btnS.length; i++) {
            btnS[i].classList.remove('btn-sBright');
        }
        for (let i = 0; i < navigation.length; i++) {
            navigation[i].classList.remove('navigationBright');
        }
        for (let i = 0; i < project.length; i++) {
            project[i].classList.remove('projectBright');
        }
        for (let i = 0; i < projectInfo.length; i++) {
            projectInfo[i].classList.remove('projectInfoBright');
        }
        about.classList.remove('aboutBright');
        footer.classList.remove('footerBright');
    }
}

//set viewing project to 99 for the first load
//this will fix the double click issue when setting 
//this value to 0 or 1
//if we set this to 0 or 1 it will auto select the project 0 or 1
//and we will need to double click the button to view the project
var viewProject = 99;

function navigateProject(index) {

    //if the project clicked is different than do switch
    if (index !== viewProject) {
        //gather all the elements by class name
        var navProjects = document.getElementsByClassName("navProject");
        var projects = document.getElementsByClassName("project");

        //set viewing project index
        viewProject = index;

        //add 'active' effect (class) to clicked nav button
        if (!darkMode) {
            for (let i = 0; i < navProjects.length; i++) {
                if (i !== index) {
                    navProjects[i].classList.remove('navActiveText');
                }
                else {
                    navProjects[i].classList.add('navActiveText');
                }
            }
        }
        else {
            for (let i = 0; i < navProjects.length; i++) {
                if (i !== index) {
                    navProjects[i].classList.remove('navActiveTextBright');
                }
                else {
                    navProjects[i].classList.add('navActiveTextBright');
                }
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
    //if the index is the same then clear navigation(close view)
    else {
        clearNavigation();
    }

}

function clearNavigation() {
    viewProject = 9;
    var navProjects = document.getElementsByClassName("navProject");
    var projects = document.getElementsByClassName("project");

    for (let i = 0; i < navProjects.length; i++) {
        navProjects[i].classList.remove('navActiveText');
    }
    for (let i = 0; i < navProjects.length; i++) {
        navProjects[i].classList.remove('navActiveTextBright');
    }
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.remove("projectShow");
    }

    console.log(navProjects[0]);
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