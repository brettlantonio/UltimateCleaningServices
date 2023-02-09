document.getElementById("HomeButton").addEventListener("click", showInfo);

document.getElementById("Contact").addEventListener("click", showForm);



function showInfo(){
    let services = document.getElementById("Services")
    let about = document.getElementById("About")
    let contact = document.getElementById("Contact")
    let display = window.getComputedStyle(services, null).display;

    if (display == "none"){
        services.style.display = "block";
        about.style.display = 'block';
        contact.style.display = 'block';
    }
    else{
        services.style.display = 'none';
        about.style.display = 'none';
        contact.style.display = 'none';
    }
}



function showForm(){
    let form = document.getElementById("contactus")
    let formDisplay = window.getComputedStyle(form, null).display
    if (formDisplay === "none"){
        form.style.display = 'flex';
        form.style.visibility = 'visible'
    }
    else {
        form.style.display = 'none';
    }
}



