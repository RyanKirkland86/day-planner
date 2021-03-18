var currentHour;
var timeBlock;
var userInput;
var userTime;
var userPlans = [];

$(".nine").text(localStorage.getItem("9"));
$(".ten").text(localStorage.getItem("10"));
$(".eleven").text(localStorage.getItem("11"));
$(".twelve").text(localStorage.getItem("12"));
$(".one").text(localStorage.getItem("13"));
$(".two").text(localStorage.getItem("14"));
$(".three").text(localStorage.getItem("15"));
$(".four").text(localStorage.getItem("16"));
$(".five").text(localStorage.getItem("17"));

$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    currentHour = (moment().format("H"));

    for (var i = 0; i <= 23; i++){
        timeBlock = i;

        if (currentHour > i){
            $('#' + timeBlock).children("div").children("textarea").addClass("past")
        }
        else if (currentHour < i){
            $('#' + timeBlock).children("div").children("textarea").addClass("future");
        }
        else {
            $('#' + timeBlock).children("div").children("textarea").addClass("present");
        }
    }
})

// This is what was working before:
$(".saveBtn").on("click", function() {
    userInput = $(this).parent("div").children("textarea").val();
    userTime = $(this).parent("div").parent().attr("id");
    localStorage.setItem(userTime, userInput)
});