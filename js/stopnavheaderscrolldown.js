<<<<<<< HEAD
    function stopNavheaderScrollDown() {
        const signalNav = document.getElementById("signalNav")
        if (signalNav.classList.contains("signalNav")) {
            signalNav.classList.remove("signalNav");
        } else {
            signalNav.classList.add("signalNav");
        }
    }
    function changePosition() {
        const checkbtn = document.getElementById("checkbtn")
        if (checkbtn.style.position === "static") {
            checkbtn.style.position = "static";
        } else {
            checkbtn.style.position = "static";
        }
        
=======
    function stopNavheaderScrollDown() {
        const signalNav = document.getElementById("signalNav")
        if (signalNav.classList.contains("signalNav")) {
            signalNav.classList.remove("signalNav");
        } else {
            signalNav.classList.add("signalNav");
        }
    }
    function changePosition() {
        const checkbtn = document.getElementById("checkbtn")
        if (checkbtn.style.position === "static") {
            checkbtn.style.position = "static";
        } else {
            checkbtn.style.position = "static";
        }
        
>>>>>>> 2bb12b75af21a886ae8bb29b8a27429c5b21a2cc
    }