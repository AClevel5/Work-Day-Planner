//Create Variables
var currentDate = $("#date");




//Function to set the date and change text on page
function setDate(){
    let momentDate = moment().format("HH:mm MMMM Do YYYY");
    currentDate.text(momentDate);
}
setDate();

//Function to change color of time slot based on current time.

//Function to adjust text in HTML (Called with event listener)

//Function to save entry into local storage (Called with event listener)

//Event listeners to call function to adjust text in html based on click.