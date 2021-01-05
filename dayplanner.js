var plansText = "";
var plansTime = "";

$(document).ready(function () {

    console.log(moment());

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
//We need to right a function that checks the current hour of the day, and compares it to the chart.
//If the hour of the day is greater than the hour shown, add the attribute of past to the time block
//If the hour of the day matches the hour shown, add the attribute of present to the time block.
//If the hour of the day is less than the hour shwon, add the attribute of future to the time block.
    
    console.log(moment().format("H"));
})
