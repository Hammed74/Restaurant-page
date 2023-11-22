import initialLoad from "./initial.js";
import contactPage from "./contact.js";
import menuPage from "./menu.js";
import homePage from "./home.js";

initialLoad();

document.addEventListener("DOMContentLoaded", () => {
const home = document.querySelector(".hero");
const contactUs = document.querySelector(".contact-us");
const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container");
const homeBtn = document.querySelector(".home")
const container = document.querySelector(".container")

contactUs.addEventListener("click", () => {
    container.innerHTML =""
    contactPage()

});
menu.addEventListener("click", () => {
      container.innerHTML = ""
  menuPage();

});
homeBtn.addEventListener("click", () => {
       container.innerHTML = ""
    homePage()
})

})