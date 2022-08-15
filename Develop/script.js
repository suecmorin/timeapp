var currentDayEl = $('#currentDay');
var projectDisplayEl = $('#project-display');
var projectClickableEl = $('#time-block');
var descriptionEl= $('description');
//var projectFormEl = $('#project-form');
//var projectNameInputEl = $('#project-name-input');


function displayTime() {                                          //display the time at the top of the page
    var rightNow = moment().format('dddd MM / DD [at] hh:mm a');
    currentDayEl.text(rightNow);
  }
 
  setInterval(displayTime, 1000);      //updates the time at the top of the page every second

ducument.addEventListener("scroll", showTimeappt);

 //  var rowID = "";
 //var rowId = $("#time-block-9 tr").first().data("id");
 //var tr = $("#time-block-9").attr('data-id');
 //var id = $(tr).data('id');

//$('#time-block tr').bind('mousehover', function(e) {
 //  $(e.currentTarget).children('td, td').css('past');
//})
 

 
//function showTimeappt() {
    
 //   var now = moment(str).format('HH:mm');
 //   for (i=9; i < 17; i++) {
//     if (now.get('hour') <  time-blockEl('#id') {                             //projectTimeTdEl is 9, 10,11 etc,the td with the project time how do i represent this? 
//        $("#time-blockEl('#id).css('past');
 //    } else if (now.get('hour') === time-blockEl('#id') {
 //           $(time-blockEl('#id').css('present');
//     } else $(time-blockEl('#id').css('future');
//     } 
 //   }
//};
 
document.addEventListener("click", addProject);

function addProject(){

var projectNameInput = prompt("Enter project name");
if (projectNameInput === null) {
    alert("You did not enter a project");

 //   var descriptionEl = $('<td>').text.(description); 
                                                      //how to make sure project name written into description td and not time td??
} else alert("great project");
}
//projectFormEl.on('submit', addProject);
//function addProject(event) {
//    event.preventDefault();
  
 //   var projectNameInputEl = descriptionEl.val();
 // printProjectData(hour, description);
// projectFormEl[0].reset();
//}

 
