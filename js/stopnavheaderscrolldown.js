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
    }