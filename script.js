var currentDayEl = $("#currentDay");
var timeBlockEl = $("#time-block");
var hourEl = $("#time-block #id")
var descriptionEl = $("#description");
var saveBtnEl = $("saveBtn");

function displayTime() {
  //display the time at the top of the page
  var rightNow = moment().format("dddd MM / DD [at] hh:mm a");

  currentDayEl.text(rightNow);
}

setInterval(displayTime, 1000); //updates the time at the top of the page every second

showTimeappt();

function showTimeappt() {
  var now = moment().hour();
  console.log(now);                                                         //get hour in 24-hour time
  for (i = 9; i < 17; i++) {
    var y = time-blockEl;
    var hour = $(this).attr('id');
    if (now < hour) {                                    //compare hour with id in class "time-block" in HTML
      descriptionEl.attr("class", "past col-sm-10 description"); //if hour is greater than id, change color based on ".past" in style.css
    } else if (now === hour) {
      descriptionEl.attr("class", "present col-sm-10 description");

    } else descriptionEl.attr("class", "future col-sm-10 description");
  }
}

//$(saveBtnEl).click(function(event) {
// event.preventDefault();
//var  desc = descriptionEl.val();
//$("textarea").val(localStorage.setItem);
//};
