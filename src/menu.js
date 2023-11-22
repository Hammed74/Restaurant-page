function menuPage() {
    const container = document.querySelector(".container")
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container")
  container.appendChild(menuContainer);

  const lobster = document.createElement("p");
  menuContainer.appendChild(lobster);
  lobster.textContent = "Lobster 50$ ";
  lobster.style.color = "white";

   const oxtail = document.createElement("p");
   menuContainer.appendChild(oxtail);
   oxtail.textContent = "Oxtail 20$";
   oxtail.style.color = "white";
   
    const friedFish = document.createElement("p");
    menuContainer.appendChild(friedFish);
    friedFish.textContent = "Fried Fish 18$ ";
    friedFish.style.color = "white";
}

export default menuPage;
