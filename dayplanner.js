var currentHour;
var timeBlock;
var userInput;
var userTime;

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

/*  What? How? Why?
        We need to create an event listener for the save button.
        We will use jquery.
        To capture information that we want to save. */
$(".saveBtn").on("click", function() {
/*    What? How? Why?
        The event listener will capture the user input in the text field.
        We will use jquery parent/children documentation to target the textarea.
        We need to be able to save this data so we can push it to local storage. */
    userInput = $(this).parent('div').children('textarea').val();
    console.log(userInput);
/*    What? How Why?
        The event listener will also record the ID tag with the user input.
        We will use the same parent/children documentation to target the ID.
        We need to be able to pair the user text input with it's proper ID tag. */
/*    What? How? Why?
        We will take these two captured values and pair them together.
        Using a key/value array.
        So we can use this array to save to JSON local storage. */
})
