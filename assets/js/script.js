//Create Variables
var currentDate = $("#date");
var timeSlots = document.querySelectorAll("input[data-hour]")
var saveButtons = document.querySelectorAll("button[data-hour]")
var currentTime = moment().format("HH")

//Function to set the date and change text on page
function setDate() {
    let momentDate = moment().format("HH:mm MMMM Do YYYY");
    currentDate.text(momentDate);
}
setDate();

//Function to return a state based on the timeSlot hour vs current hour
function timeSlotColor(timeSlot, time) {  
        var colorTime = timeSlot.dataset.hour;
        if (colorTime === time)
            return "current"
        if (colorTime < time)
            return "past"
        if (colorTime > time) 
            return "future" 
}

// Store Text based on Hour
function storeText(hour, text) {
    localStorage.setItem(hour, text)
}

// Get Text from local storage based on hour
function getTextFromStorage(hour){
  return  localStorage.getItem(hour);
}

//Find input at a certain hour and return value
function getTextAtHour(hour) {
    let newText = document.querySelector(`input[data-hour='${hour}']`)
    return newText.value;
}

//Add event listeners for each save button and call storeText and getTextAtHour
function addSaveListeners(elements) {
    elements.forEach(element => {
        element.addEventListener("click", () => {
            let hour = element.dataset.hour
            let text = getTextAtHour(hour);
            storeText(hour, text);
        })
    })
}
addSaveListeners(saveButtons);

// Load Time Slots color from timeSlot funtion and Text from Local Storage
function loadTimeSlotsInput(timeSlots){
  timeSlots.forEach(element => {
    let hour = element.dataset.hour
    let storeText = getTextFromStorage(hour)
    if (storeText !== undefined) {
        element.value = storeText
    }
    let state = timeSlotColor(element, currentTime)
    element.classList.add(state);

  })
}
loadTimeSlotsInput(timeSlots)

