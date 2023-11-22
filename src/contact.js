function contactPage(){
    const contactContainer = document.createElement("div")
    document.body.appendChild(contactContainer)

    const contactInfo = document.createElement("p")
    contactContainer.appendChild(contactInfo)
    contactInfo.textContent = "Call Us at 444-555-9999"
}

export default contactPage