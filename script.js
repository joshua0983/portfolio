window.onscroll = function() {
    let navbar = document.querySelector("#navbar");
    let welcomeSection = document.querySelector("#welcome-section").offsetTop - navbar.offsetHeight;

    if(window.scrollY >= welcomeSection){
        navbar.classList.add('solid');
    }else{
        navbar.classList.remove('solid');
    }
};

