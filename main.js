let menu = document.querySelector(".navbar")
let menuIcon = document.querySelector("#menu-icon")

// menu iconuna tıklandıgında "open-menu" clasını ekleme ve çıkarma islemi yapar
menuIcon.addEventListener("click",()=>menu.classList.toggle("open-menu"));