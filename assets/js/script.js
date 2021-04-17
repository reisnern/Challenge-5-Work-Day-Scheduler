//Current = querySelector("currentDay")
var current =$("currentDay")
//Start Moment
var todaymoment = moment().format("dddd, MMMM Do YYYY h:mm:ss a")
//Create line three 
current.append(todaymoment)
//saveBtn = querySelector(".saveBtn")
var Save = $(".saveBtn")
//Keep track of time in milliseconds
var update = setInterval(updateHour, 3600000)

//Start JQuery 
$(document).start(function(){

$(saveBtn).on("click, function()"{
    var hour = $(pastpresent).parent()
}
}