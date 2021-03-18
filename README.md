# day-planner

## Project:

This is a work day planner. The user may input reminders into the text fields according to time and click save, which stores it in local storage. The page will always load what has been stored upon refresh or reboot. Also, the fields of the text boxes will dynamically color code depending on the time of day.

[Deployed Link]()

![Image]()

## Technologies Used:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [JSON](https://www.json.org/json-en.html)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Moment](https://momentjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Process:

In the following example, the text fields on the planner will change color according to the time of day. This is done using a for loop with comparison operators. Depending on the time of day, the script will add a class that can then be color-coded using the CSS script:

```javascript
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
```

## Deployed Link:

[Deployed Link]()

## Authors:

- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:

This project is licensed under the MIT License.

## Acknowledgements:

Thank you to UCB Extension for the help with this project.