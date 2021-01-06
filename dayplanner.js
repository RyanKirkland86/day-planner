var currentHour;
var timeBlock;

$(document).ready(function () {

    console.log(moment());

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
//We need to write a function that checks the current hour of the day, and compares it to the chart.
//If the hour of the day is greater than the hour shown, add the attribute of past to the time block
//If the hour of the day matches the hour shown, add the attribute of present to the time block.
//If the hour of the day is less than the hour shown, add the attribute of future to the time block.
    
    console.log(moment().format("H"));
    currentHour = (moment().format("H"));
//Write a for loop that checks each block of time, with it's ID to the current Hour
    for (var i = 0; i <= 23; i++){
        timeBlock = i;
//Write conditionals to add style attributes
        if (currentHour > i){
            $('#' + timeBlock).children('div').children("textarea").addClass("past")
        }
        else if (currentHour < i){
            $('#' + timeBlock).children('div').children("textarea").addClass("future");
        }
        else {
            $('#' + timeBlock).children('div').children("textarea").addClass("present");
        }
    }
})
