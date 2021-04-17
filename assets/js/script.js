//Current = document.querySelector("currentDay")
var current =$("currentDay")
//Start Moment
var todaymoment = moment().format("dddd, MMMM Do YYYY h:mm:ss a")
//Create line three 
current.append(todaymoment)