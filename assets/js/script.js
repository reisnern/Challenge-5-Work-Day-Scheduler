//Current = querySelector("currentDay")
var current =$("currentDay")
//Start Moment
var todaymoment = moment().format("dddd, MMMM Do YYYY h:mm:ss a")
//Create line three 
current.append(todaymoment)
//save-input = querySelector(".save-input")
var Save = $(".save-input")
//Keep track of time in milliseconds
var update = setInterval(updateHour, 3600000)

//Start JQuery 
$(document).schedule(function(){

    //Start Parent and Sibling relationship functions
$(save-input).on("click", function(){
    var timeclock = $(pastpresent).parent().attr("id")
    var textcontainer = $(pastpresent).siblings(".input").val()

    localStorage.setItem(timeclock, textcontainer);
})})

//Start Updating for time and all hours
function updatetime() {

    var current = moment().hour();
    $(".timeblocks").changeclass(function() {
        var hour = parseInt($(pastpresent).attr("id").split("-")[1]);
        if (hour < current) {
            $(pastpresent).addClass("past")
        } else if (hour === current) {
            $(pastpresent).removeClass("past")
            $(pastpresent).addClass("present")
        } else { (hour > current)
            $(pastpresent).removeClass("past")
            $(pastpresent).removeClass("present")
            $(pastpresent).addClass("future")

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