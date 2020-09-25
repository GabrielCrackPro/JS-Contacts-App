const API_URL = 'http://localhost:3000'
const addContact = document.querySelector('form')
const contactsList = document.querySelector('#contacts-list')
addContact.addEventListener('submit', (e) => {
    const addContactData = new FormData(addContact)

    const contactName = addContactData.get('contact-name')
    const contactPhone = addContactData.get('contact-phone')
    const contactDescription = addContactData.get('contact-description')

    const newContact = {
        contactName,
        contactPhone,
        contactDescription
    }
    const savedContacts = []
    if (contactName == '' || contactPhone == '' || contactDescription == '' || contactPhone.length < 6) {
        console.error('Please try again')
    } else {
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                "content-type": "application/json"
            }
        })
        contactsList.innerHTML += `
        <h4>${newContact.contactName}</h4>
        <i class="fas fa-mobile-alt"></i><p id="contact-phone-card">${newContact.contactPhone}</p>
        <i class="fas fa-comment-alt"></i><p id="contact-description-card">${newContact.contactDescription}</p>
        `
        savedContacts.push(newContact)
        localStorage.setItem('Contacts', JSON.stringify(savedContacts))
        const localContacts = localStorage.getItem('Contacts')
        console.log(savedContacts[0])
    }
    addContact.reset()
    e.preventDefault()
})