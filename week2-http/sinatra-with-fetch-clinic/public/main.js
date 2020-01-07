let appendLocationsArrayToHtml = (locations) => {
  let locationList = document.getElementById('locations')

  locations.forEach(location => {
    locationList.innerHTML += `<li>${location.city}, ${location.country}</li>`
  })
}

let fetchLocations = () => {
  // Your code here
  console.log("about to run a fetch request");
  fetch("/locations.json")
    .then((response) => {
      if (response.ok) {
        return response

      } else {

        //create an error and throw it
      }


    })
    .then((response) => {
      console.log(response.body)
      return response.json()

    })
    .then((parsedLocations) => {
      const locationsArray = parsedLocations.locations
      appendLocationsArrayToHtml(locationsArray)
    })
    .catch((errorFromTheFirstThen) => {
      console.log(errorFromTheFirstThen)
    })
}

let postLocation = (event) => {
  event.preventDefault()

  let cityInputField = document.getElementById('city')
  let countryInputField = document.getElementById('country')

  let newLocation = {
    location: {
      city: cityInputField.value,
      country: countryInputField.value
    }
  }
  // Your code here
  fetch('/locations.json', {
    method:"POST",
    body: JSON.stringify(newLocation) //makes json string
  })
}
console.log("running JS code")
fetchLocations()

document
  .getElementById('new-location-submit-button')
  .addEventListener('click', postLocation)
