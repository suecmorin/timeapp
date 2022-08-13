var currentDayEl = $('#currentDay');
var projectDisplayEl = $('#project-display');
var projectClickableEl = $('#clickable-row');
var projectTimetdEl= $()
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
 



function displayTime() {                                          //display the time at the top of the page
    var rightNow = moment().format('dddd MM DD [at] hh:mm A');
    currentDayEl.text(rightNow);
  }
 
  setInterval(displayTime, 1000);      //updates the time at the top of the page every second

function showTimeappt() {
    
    var now = moment(str).format('HH:mm');
    for (i=9; i=16; i++) {
     if (now.get('hour') <  projectClickableEl(i)) {                             //projectTimeTdEl is 9, 10,11 etc,the td with the project time how do i represent this? 
        $(projectClickableEl(i)).css('background-color', 'red');
     } else if { (now.get('hour') === projectClickableEl(i)) {
            $(projectClickableEl(i)).css('background-color', 'green');
     } 
     else $(projectClickableEl(i)).css('background-color', 'blue');
     } 

    }
}

 
document.addEventListener("click", addProject);

function addProject() {
    
}
projectFormEl.on('submit', handleProjectFormSubmit);
function handleProjectFormSubmit(event) {
    event.preventDefault();
  
    var projectName = projectNameInputEl.val().trim();
    printProjectData();
  
    projectFormEl[0].reset();
  }
  
  