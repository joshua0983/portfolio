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