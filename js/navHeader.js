const navHeader = document.getElementById("navHeader");
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    const signalNav = document.getElementById("signalNav")

    if (signalNav.classList.contains("signalNav")) {
        if (navHeader.classList.contains("scroll-down")) {
            navHeader.classList.remove("scroll-down");
            navHeader.classList.add("scroll-up");
        } else {
            navHeader.classList.remove("scroll-up")
            navHeader.classList.add("scroll-down")
        }
    } else

    if (currentScroll <= 0) {
        navHeader.classList.add("scroll-up")
    }
    if (signalNav.classList.contains("signalNav")) {
        if (navHeader.classList.contains("scroll-down")) {
            navHeader.classList.remove("scroll-down");
            navHeader.classList.add("scroll-up");
        } else {
            navHeader.classList.remove("scroll-up")
            navHeader.classList.add("scroll-down")
        }
    } else
    if (currentScroll > lastScroll && !navHeader.classList.contains("scroll-down")){
        navHeader.classList.remove("scroll-up")
        navHeader.classList.add("scroll-down")
    } else if (
		currentScroll < lastScroll &&
		navHeader.classList.contains("scroll-down")
	) {
		navHeader.classList.remove("scroll-down");
		navHeader.classList.add("scroll-up");
	}

    lastScroll = currentScroll;
});

var path = window.location.pathname;
var page = path.split("/").pop();
const signalNav = document.getElementById("signalNav")
const home = document.getElementById("home")
const menu = document.getElementById("menu")
console.log(path);
const mobileHome = document.getElementById("mobileHome")
const mobileMenu = document.getElementById("mobileMenu")
const mobileAbout = document.getElementById("mobileAbout")
const mobileDownload = document.getElementById("mobileDownload")
const noneMobileHome = document.getElementById("noneMobileHome")
const noneMobileMenu = document.getElementById("noneMobileMenu")
const noneMobileAbout = document.getElementById("noneMobileAbout")
const noneMobileDownload = document.getElementById("noneMobileDownload")



if (page === "") {
    mobileHome.style.display = "none";
    mobileMenu.style.display = "flex";
    mobileAbout.style.display = "flex";
    mobileDownload.style.display = "flex";
    signalNav.classList.add("home");

    if (home.classList.contains("hide")) {
        home.classList.remove("hide");
        home.classList.add("active");
    } 

    
}
if (page === "menu") {
    mobileHome.style.display = "flex";
    mobileMenu.style.display = "none";
    mobileAbout.style.display = "flex";
    mobileDownload.style.display = "flex";
    signalNav.classList.add("menu");
    if (menu.classList.contains("hide")) {
        menu.classList.remove("hide");
        menu.classList.add("active");
        home.classList.remove("active");
        home.classList.add("hide");
    }
}
// const MediaQuery = window.matchMedia("(max-width: 591px)");
// if(MediaQuery.matches) {
//     if (page === "") {
    
//           console.log("hello1");
//           noneMobileHome.style.display = "inline-flex";
//           noneMobileMenu.style.display = "none";
//           noneMobileAbout.style.display = "none";
//           noneMobileDownload.style.display = "none";

//       }
      
//       if (page === "menu") {

//           noneMobileHome.style.display = "none";
//           noneMobileMenu.style.display = "inline-flex";
//           noneMobileAbout.style.display = "none";
//           noneMobileDownload.style.display = "none";
        
//       }
// } else {
//         noneMobileHome.style.display = "inline-flex";
//         noneMobileMenu.style.display = "inline-flex";
//         noneMobileAbout.style.display = "inline-flex";
//         noneMobileDownload.style.display = "inline-flex";
// }




