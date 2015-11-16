// Exercise week6
// use attachEvent in IE

var toggleClass = function(elem, cls){

    var classlist = elem.classList;
    if (classlist.contains(cls)) {
        classlist.remove(cls);
    } else {
        classlist.add(cls);
    }
};

var eventHandler = function(elem, event, method) {

    if (elem.addEventListener) {
        elem.addEventListener(event, method);
    } else if (elem.attachEvent) {
        elem.attachEvent(event, method);
    } else {
        console.log('Events are not supported!');
    };
};

var citylink = document.getElementById('city-link');

citylink.addEventListener(
    'click',
    function(event) {
        event.preventDefault();
        console.log(this + ' clicked!');
    }
);

var form = document.getElementsByTagName('form')[0];

form.addEventListener(
    'keyup',
    function(event) {
        console.log(event.keyCode);
    }
);

var toggle = document.getElementById('hide-seek'),
    p = document.getElementById('paragraph');

toggle.addEventListener(
    'click',
    function(event) {
        event.preventDefault();
        toggleClass(p, 'hide')
    }
);

var parentBox = document.getElementById('box-list'),
    boxes = parentBox.children,
    boxcls = ['yellow', 'green', 'blue'];

parentBox.addEventListener(
    'click',
    function(event){
        var box0 = boxes[0],
            box1 = boxes[1],
            box2 = boxes[2],
            elem;
        if(event.target === box0) {
            cls = 'green';
            elem = box0;
        }
        else if(event.target === box1) {
            cls = 'blue';
            elem = box1;
        }
        else if(event.target === box2) {
            cls = 'yellow';
            elem = box2;
        } else {
            return false;
        }
        toggleClass(elem, cls);
    }
);

var myfunc = function() {
    console.log('It works!');
};

eventHandler(citylink, 'click', myfunc);

