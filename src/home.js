function homePage(){
    const container = document.querySelector(".container")
  const hero = document.createElement("div");
  container.appendChild(hero);
    hero.classList.add("hero")

  const heroImage = document.createElement("img");
  hero.appendChild(heroImage);
  heroImage.src = "/assets/hero-image.jpg";
  heroImage.style.width = "100%";


  const heroCopy = document.createElement("p");
  hero.appendChild(heroCopy);
  heroCopy.style.color = "white";
  heroCopy.style.fontSize = "20px";
  heroCopy.style.width = "80%";
  heroCopy.textContent =
    "Welcome to Highball, where we celebrate the rich tapestry of American tastes. Our dishes are a harmonious blend of traditional flavors and modern culinary finesse, inviting you to experience the best of American dining. Savor our sizzling, tender steaks or dive into our towering burgers, each bite delivering an explosion of flavor. Delight in our fresh seafood, expertly prepared to satisfy your cravings for oceanic delights. From classic comfort foods to innovative creations, our menu promises a gastronomic adventure that tantalizes your taste buds and leaves you craving more. Join us at Highball and indulge in a dining experience that encapsulates the spirit of American cuisine - where every dish tells a story and every meal is a celebration.";
}

export default homePage