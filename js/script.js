let body = document.querySelector("body");
let html = document.querySelector("html");
let removeAboutMe = document.querySelector(".js-removeAboutMe");
let sectionAboutMe = document.querySelector(".js-sectionAboutMe");
let switchTextAboutMe = document.querySelector(".js-switchTextAboutMe");
let removeHobby = document.querySelector(".js-removeHobby");
let sectionHobby = document.querySelector(".js-sectionHobby");
let switchTextHobby = document.querySelector(".js-switchTextHobby");
let removeFrontEnd = document.querySelector(".js-removeFrontEnd");
let sectionFrontEnd = document.querySelector(".sectionFrontEnd");
let switchTextFrontEnd = document.querySelector(".js-switchTextFrontEnd");
let removeTable = document.querySelector(".js-removeTable");
let sectionTable = document.querySelector(".sectionTable");
let switchTextTable = document.querySelector(".js-switchTextTable");
let link = document.querySelector(".link");
let mainHeader = document.querySelector(".mainHeader");
let backgroundChangeButton = document.querySelector(".js-backgroundChangeButton");

removeAboutMe.addEventListener("click", () => {
    sectionAboutMe.classList.toggle("button--none");
    switchTextAboutMe.innerText = sectionAboutMe.classList.contains("button--none") ? "Pokaż" : "Ukryj";

});

removeHobby.addEventListener("click", () => {
    sectionHobby.classList.toggle("button--none");
    switchTextHobby.innerText = sectionHobby.classList.contains("button--none") ? "Pokaż" : "Ukryj";
});

removeFrontEnd.addEventListener("click", () => {
    sectionFrontEnd.classList.toggle("button--none");
    switchTextFrontEnd.innerText = sectionFrontEnd.classList.contains("button--none") ? "Pokaż" : "Ukryj";
});

removeTable.addEventListener("click", () => {
    sectionTable.classList.toggle("button--none");
    switchTextTable.innerText = sectionTable.classList.contains("button--none") ? "Pokaż" : "Ukryj";
});

backgroundChangeButton.addEventListener("click", () => {
    html.classList.toggle("button--whiteBackground");
    if (html.classList.contains("button--whiteBackground")) {
        backgroundChangeButton.innerText = "Ciemny motyw";
        body.classList.add("button--whiteBody");
        mainHeader.classList.remove("mainHeader");
        mainHeader.classList.add("mainHeaderWhite");

    } else {
        backgroundChangeButton.innerText = "Jasny motyw";
        body.classList.remove("button--whiteBody");
        mainHeader.classList.remove("mainHeaderWhite");
        mainHeader.classList.add("mainHeader");

    }
});

console.log("No Elo");