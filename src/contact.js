function contactPage(){
    const container = document.querySelector(".container")
    const contactContainer = document.createElement("div")
    container.appendChild(contactContainer)
    contactContainer.classList.add("contact-container")

    const contactInfo = document.createElement("p")
    contactContainer.appendChild(contactInfo)
    contactInfo.textContent = "Call Us at 444-555-9999"
    contactInfo.style.color = "white"
}

export default contactPage