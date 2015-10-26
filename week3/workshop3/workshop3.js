/*
Exercises week 3
*/

var formElement,
    optionElements = [];

formElement = document.getElementById("my-form");
optionElements = formElement.querySelectorAll("option");


for(var i=0; i<optionElements.length; i++){

    var title = optionElements[i].getAttribute("title");

    if (title) { console.log(title); }

    else {
        optionElements[i].setAttribute("title", "BLANK");
    }
}