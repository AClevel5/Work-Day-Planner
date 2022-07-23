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

//Function to return a state based on the timeSlot
function timeSlotColor(timeSlot) {  
        var colorTime = timeSlot.dataset.hour;
        if (colorTime === currentTime)
            return "current"
        if (colorTime < currentTime)
            return "past"
        if (colorTime > currentTime) 
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

function loadTimeSlotsInput(timeSlots){
  timeSlots.forEach(element => {
    let hour = element.dataset.hour
    let storeText = getTextFromStorage(hour)
    if (storeText !== undefined) {
        element.value = storeText
    }
    //get text content from local storage
    //append element text content to what is stored
    let state = timeSlotColor(element)
    element.classList.add(state);
    //apply coloring style timeSlotColor();
  })

}
loadTimeSlotsInput(timeSlots)
//Event listeners to call function to adjust text in html based on click.
