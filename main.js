console.log(customers) //to make sure console is working

console.log(usStates) //to make sure usStates const from states.js is working
console.log(moment) //to make sure moment format is working on the console

const customerDirectory = document.querySelector('#customer-directory') // get the main box to put the data


for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer')
    // father (customer div)
    const dateDob = moment(customer.dob.date).format("MMM Do YY"); //created the const to give format to the date DOB date
    const registeredDate = moment(customer.registered.date).format("MMM Do YY"); //format to give format to date
    const abbrStates = nameToAbbr(customer.location.state) //after I linked states.js I created const to get Abreviations

    let contentElement = document.createElement('article') //son (article)
    contentElement.classList.add ("br2", "ba", "dark-gray", "b--black-10", "mv3", "w-60", "w-90-m", "w-90-l", "mw6", "center")
    
    let imageElement = document.createElement('img') //son (photo)
    imageElement.src= customer.picture.large
    imageElement.alt = 'sophia burns'
    imageElement.classList.add("db", "w-50", "br2", "br--top") //variables which also are son
    contentElement.appendChild(imageElement)
    customerElement.appendChild(contentElement)

    let infoElement = document.createElement('div')
    infoElement.classList.add("pa2", "ph3-ns", "pb3-ns")

    let titleElement = document.createElement('h1')
    titleElement.classList.add("5", "f4-ns", "mv0", "name")
    titleElement.innerText = ` ${customer.name.title} ${customer.name.first} ${customer.name.last}`
    contentElement.appendChild(titleElement)

    let emailElement = document.createElement('h1')
    emailElement.classList.add("5", "f4-ns", "mv0")
    emailElement.innerText = ` ${customer.email}`
    contentElement.appendChild(emailElement)

    let numberElement = document.createElement('h1')
    numberElement.classList.add("5", "f4-ns", "mv0")
    numberElement.innerText = ` ${customer.location.street.number} ${customer.location.street.name}`
    contentElement.appendChild(numberElement)

    let cityElement = document.createElement('h1')
    cityElement.classList.add("5", "f4-ns", "mv0")
    cityElement.innerText = ` ${customer.location.city}, ${abbrStates} ${customer.location.postcode}`
    contentElement.appendChild(cityElement)

    



    let dobElement = document.createElement('h1')
    dobElement.classList.add("5", "f4-ns", "mv0")
    dobElement.innerText = `DOB ${dateDob}`
    contentElement.appendChild(dobElement)

    let dateElement = document.createElement('h1')
    dateElement.classList.add("5", "f4-ns", "mv0")
    dateElement.innerText = `Registered ${registeredDate}`
    contentElement.appendChild(dateElement)

    

    customerDirectory.appendChild(customerElement)

}
    
