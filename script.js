var currentDayEl = $("#currentDay");
var saveBtnEl = $("#saveBtn");
var now = moment().hours();   

$(document).ready(function () {
  saveBtnEl.onclick = function() {
    function e() {
     e.preventDefault();
    };
    var appt= $(this).siblings(".description").val(); 
    var hour = $(this).parent().attr("id");                            
    localStorage.setItem(hour, appt); 
    console.log(localStorage.getItem("11"));
  };
});

displayTime();
setInterval(displayTime, 1000);
showTimeappt();
retrieveLocal();
  

function displayTime() {
  var rightNow = moment().format("dddd MM / DD [at] hh:mm a");
  currentDayEl.text(rightNow);   
  }
 
  function retrieveLocal() {
  $("#9.description").val(localStorage.getItem("9"));
  $("#10.description").val(localStorage.getItem("10"));
  $("#11.description").val(localStorage.getItem("11"));
  $("#12.description").val(localStorage.getItem("12"));
  $("#13.description").val(localStorage.getItem("13"));
  $("#14.description").val(localStorage.getItem("14"));
  $("#15.description").val(localStorage.getItem("15"));
  $("#16.description").val(localStorage.getItem("16"));
  $("#17.description").val(localStorage.getItem("17"));
  };

function showTimeappt(){
    var time = $(".time-block");
    time.each(function(){                                
    var hour = parseInt($(this).attr("id"));            //Int converts string "9" to integer to do the math comparisons                                                                       //this refers to .time-block
    if (now > hour) {                                                
      $(this).children(".col-sm-10").attr("class", "past col-sm-10 description");                                                                                   
      } else if (now === hour) {
      $(this).children(".col-sm-10").attr("class", "present col-sm-10 description");
      } else {
      $(this).children(".col-sm-10").attr("class", "future col-sm-10 description");
      }  
    });
};


