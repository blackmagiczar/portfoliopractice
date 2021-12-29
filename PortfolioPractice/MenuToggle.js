function ToggleMenu() {
    var nav = document.getElementById("navigation");
    var main = document.getElementById("main");
    
    
    if (nav.style.display == "none") {
        nav.style.display = "flex";
        main.style.marginTop = "12rem";
        main.style.transitionDuration = "1s";
    } else {
        nav.style.display = "none";
        main.style.marginTop = "0rem";
    }
}