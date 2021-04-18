//Start Time Display
var Displaytime =$("#currentDay")
var now = moment().format("dddd, MMMM Do YYYY h:mm:ss a")

Displaytime.text(now);

function updatetime() {

    var current = moment().hour();
    //console.log(current)

    var timeblocks = $(".time-block");

    timeblocks.each(function() {

        var hour = parseInt($(this).attr("id"));


        if (current > hour) {
            $(this).addClass("past");
            // console.log('Status', '${hour} - Past');
        } else if (current === hour) {
            $(this).addClass("present")
            // console.log('Status', '${hour} - Present')
        } else {
            $(this).addClass("future");
            //console.log('Status', '{hour} - Present');
        }
    })
}

updatetime();


    //Save Start
var saveBtn = $(".saveBtn")

saveBtn.click(function(event) {
    event.preventDefault();

    var timeblocks = $(this).parent().attr("id");
    var inputs = $(this).siblings(".input").val().trim();

    localStorage.setItem(timeblocks, JSON.stringify(inputs));
    //console.log(timeblocks, input);

    var alert = $(".alert");
    
    alert.addClass("show");
    setTimeout(function () {
        alert.removeClass("show");   
    }, 1000);
})

// Start Timeblock Formating

//Start Showing Time Data
function showtimedata() {
    var timeblocks = $(".time-block");

    timeblocks.each(function() {
        // Access input associated with timeblocksid
        var timeblocksid = $(this).attr("id");
        var inputs = JSON.parse(localStorage.getItem(timeblocksid));

        if (inputs !== null) {
            $(this).children(".input").val(input);
            //console.log(timeblocksid, input);
        }
    })
}

showtimedata();