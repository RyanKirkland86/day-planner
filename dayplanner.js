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
    console.log(userInput);
    userTime = $(this).parent("div").parent().attr("id");
    console.log(userTime);
    localStorage.setItem(userTime, userInput)
    // keyVal = {
    //     time: userTime,
    //     plans: userInput
    // }
    // console.log(keyVal);
    // userPlans = JSON.parse(localStorage.getItem("plans"));
    // if (userPlans === null) {
    //     localStorage.setItem("plans", JSON.stringify([{ time: userTime, plans: userInput }]));
    // }
    // else {
    //     userPlans.push(keyVal);
    //     localStorage.setItem("plans", JSON.stringify(userPlans));
    // }
});

if (localStorage.getItem("9") !== null) {
    $("9").parent("div").children("textarea").text(localStorage.getItem("9"));
}

// $(".saveBtn").click(function() {
//     var value = $(this).siblings(".text-box").val();
//     // console.log(userInput);
//     var key = $(this).siblings(".time").text();
//     // console.log(userTime);
//     localStorage.setItem(key, value);
//     console.log(value);
//     console.log(key);
// })

// $(".saveBtn").click(function () {
//     var value = $(this).siblings(".textentry").val();
//     var key = $(this).siblings(".time").text();
//     localStorage.setItem(key, value);
//     console.log(key);
//     console.log(value);
// })