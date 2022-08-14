var currentDayEl = $('#currentDay');
var projectDisplayEl = $('#project-display');
var projectClickableEl = $('#clickable-row');
var projectNameEl= $();
//var projectFormEl = $('#project-form');
//var projectNameInputEl = $('#project-name-input');
 


function displayTime() {                                          //display the time at the top of the page
    var rightNow = moment().format('dddd MM / DD [at] hh:mm a');
    currentDayEl.text(rightNow);
  }
 
  setInterval(displayTime, 1000);      //updates the time at the top of the page every second

function showTimeappt() {
    
    var now = moment(str).format('HH:mm');
    for (i=9; i<17; i++) {
     if (now.get('hour') <  projectClickableEl($i)) {                             //projectTimeTdEl is 9, 10,11 etc,the td with the project time how do i represent this? 
        $(projectClickableEl($i)).css('background-color', 'red');
     } else if (now.get('hour') === projectClickableEl($i)) {
            $(projectClickableEl($i)).css('background-color', 'green');
     } else $(projectClickableEl($i)).css('background-color', 'blue');
     } 
    }

 
document.addEventListener("click", addProject);

function addProject() {
var projectNameInput = prompt("Enter project name");
if (projectNameInput != null) {
var projectNameTdEl = $('<td>').text(name);
} else  alert("You did not enter a project");
}



//projectFormEl.on('submit', handleProjectFormSubmit);
//function handleProjectFormSubmit(event) {
//    event.preventDefault();
//printProjectData();
// projectFormEl[0].reset();

