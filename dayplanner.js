$(document).ready(function () {

    console.log(moment());

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
})