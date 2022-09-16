
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)


// Append description to dogDetails

let description = document.createElement('h3')
description.textContent = 'Description: '
dogDetails.append(description)

// Add paragraph to dogDetails
let paragraph = document.createElement('p')
paragraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called.She always acts as though any stranger she meets will harm her, and dislikes other animals'
dogDetails.append(paragraph)

// Add Feeding times header
let feedingTimesHeader = document.createElement('h3')
feedingTimesHeader.textContent = 'Feeding Times:'
dogDetails.append(feedingTimesHeader)

// Add list under Feeding Times to dogDetails 
let feedingTimesList = document.createElement('ul')

let morning = document.createElement('li')
morning.textContent ='9:00 am'
feedingTimesList.append (morning)


let afternoon = document.createElement('li')
afternoon.textContent ='12:00 pm'
feedingTimesList.append (afternoon)


let evening = document.createElement('li')
evening.textContent ='5:00 pm'
feedingTimesList.append (evening)

dogDetails.append(feedingTimesList)