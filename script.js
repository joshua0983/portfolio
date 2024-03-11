window.onscroll = function() {
    let navbar = document.querySelector("#navbar");
    let welcomeSection = document.querySelector("#welcome-section").offsetTop - navbar.offsetHeight;

    if(window.scrollY >= welcomeSection){
        navbar.classList.add('solid');
    }else{
        navbar.classList.remove('solid');
    }
};

function sendEmail(){
    window.location.href = "mailto:joshuajateno@gmail.com";
}

function goToLinkedIn(){
    window.location.href = "https://linkedin.com/in/joshuajateno";
}

function call(){
    window.location.href = "tel: +18456256683";
}

function submitForm(){
    let name = document.querySelector("#name-holder").value;
    let email = document.querySelector("#email-holder").value;
    let subject= document.querySelector("#subject-holder").value;
    let message = document.querySelector("#message-holder").value;

    window.location.href = `mailto:joshuajateno@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
}