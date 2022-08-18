var currentDayEl = $("#currentDay");

//var now = moment().hours();      

function displayTime() {
  //display the time at the top of the page
  var rightNow = moment().format("dddd MM / DD [at] hh:mm a");

  currentDayEl.text(rightNow);
}
    

setInterval(displayTime, 1000); //updates the time at the top of the page every second

showTimeappt();

function showTimeappt() {
    var time = $(".time-block");
    time.each(function() {                                //each replaces for loop, runs on each .time-block in HTML/parse takes each id separately/
    var hour = parseInt($(this).attr("id"));                     //Int converts string "9" to integer to do the math comparisons    
                                                                       //this refers to .time-block
    if (now > hour) {                                                //compare hour with id in class "time-block" in HTML
      $(this).children("col-sm-10").attr("class", "past col-sm-10 description");      //if current hour is greater than id, add class ".past" from style.css file
                                                                                     //textarea is a child of description class
    } else if (now === hour) {
      $(this).children("col-sm-10").attr("class", "present col-sm-10 description");

    } else {
      $(this).children("col-sm-10").attr("class", "future col-sm-10 description");
    }
  })
}

button.on("click", (function(event) {
 event.preventDefault();
 var descrip = document.GetElementById("mtg").value;
var parent = $(this).parent().attr("id");                                    //this refers to textarea "mtg", parent is time-block
localStorage.setItem(parent, descrip);

});
