/*
Exercises week 5
*/

var log = function(s){ console.log(s); };

var newTag = function(tag, content){

    var openingTag = "<" + tag + ">",
        closingTag = "</" + tag + ">",
        content = (content === undefined) ? "" : content; 

    return openingTag + content + closingTag;
}


var switchBgColour = function(){

    var listElement = document.getElementsByTagName("li");
    var len = listElement.length;

    for(var i=0; i < len; i++){
        var li = listElement[i],
            classList = li.classList;
        if (classList.contains("red-bg") === true){
            li.className = "green-bg";
        } else {
            li.className = "red-bg";
        }
    }
}

var wrapElement = function(elem, tag){

    var newElem = document.createElement(tag);
    elem.parentNode.replaceChild(newElem, elem);
    newElem.appendChild(elem);

}

var h2 = newTag("h2", "This is an h2"),
    contentElement = document.getElementById("content");

contentElement.insertAdjacentHTML("beforebegin", h2);

var div = "<div id='second-div'>This is the 'second-div'</div>";

contentElement.insertAdjacentHTML("beforeend", div);

var h3 = document.getElementById("h3-header"),
    secondDiv = document.getElementById("second-div")

h3.parentNode.removeChild(h3);
secondDiv.appendChild(h3);

var colourList = document.createElement("ul");

colourList.setAttribute("id", "colour-list");
colourList.setAttribute("class", "unordered-list");

var li1 = document.createElement("li"),
    li2 = document.createElement("li"),
    li3 = document.createElement("li"),
    li4 = document.createElement("li");

li1.appendChild(document.createTextNode("my background is red!"));
li2.appendChild(document.createTextNode("my background is green!"));
li3.appendChild(document.createTextNode("my background is also green!"));
li4.appendChild(document.createTextNode("red background"));

li1.setAttribute("class", "red-bg");
li2.setAttribute("class", "green-bg");
li3.setAttribute("class", "green-bg");
li4.setAttribute("class", "red-bg");

colourList.appendChild(li1);
colourList.appendChild(li2);
colourList.appendChild(li3);
colourList.appendChild(li4);

contentElement.appendChild(colourList);

window.setInterval(switchBgColour,1000);

wrapElement(h3, "li");
