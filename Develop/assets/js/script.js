var currentDay =$("#currentDay")
//var currentDay = querySelector("#currentDay")
var today = moment().format("dddd, MMMM Do YYYY h:mm:ss a")
//Create line three 
currentDay.append(today)
var saveBtn = $(".saveBtn")
//var saveBtn = document.querySelector(".saveBtn")
var update = setInterval(updatetime, 3600000)
//Keep track of time in milliseconds

$(document).ready(function(){
//jQuery detects this state of readiness

//Start Parent and Sibling relationship functions
$(saveBtn).on("click", function(){
    var time = $(this).parent().attr("id")
    // pull parent of 9am so no loop is required
    var textcontainer = $(this).siblings(".input").val()
    // value from textcontainer, this is the sibling of "timeclock" as well
    localStorage.setItem(timeclock, textcontainer);
    //set key, value
})})

//Start Updating for time and all hours
function updatetime() {

    var current = moment().hour();
    //console.log(current)
    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id").split("-")[1]);
        if (hour < current) {
            $(this).addClass("past")
        } else if (hour === current) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else { (hour > current)
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
            //console.log(hour)
        }
    })}

$("#9am .input").val(localStorage.getItem("9am"))
$("#10am .input").val(localStorage.getItem("10am"))
$("#11am .input").val(localStorage.getItem("11am"))
$("#12pm .input").val(localStorage.getItem("12pm"))
$("#1pm .input").val(localStorage.getItem("1pm"))
$("#2pm .input").val(localStorage.getItem("2pm"))
$("#3pm .input").val(localStorage.getItem("3pm"))
$("#4pm .input").val(localStorage.getItem("4pm"))
$("#5pm .input").val(localStorage.getItem("5pm"))

updatetime();