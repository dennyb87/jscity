/*
Exercises week 4
*/

var log = function(x){ console.log(x); };

var body_children = document.body.children,
    body_children_len = body_children.length;

for(var i=0; i<body_children_len; i++){
    log(body_children[i]);
}

var has_children = function(elem){

    if (elem.children.length > 0){
        return true;
    }

    return false;
}

var get_first_child = function(elem){

    if (has_children(elem)){
        return elem.children[0];
    }

    return false;
}

var get_last_child = function(elem){

    var children = elem.children,
        len = children.length;

    if (has_children(elem)){
        return children[len - 1];
    }

    return false;
}

var selector_counter = function(selector){

    return document.querySelectorAll(selector).length;
}

var firs_or_last = function(elem){

    var parent = elem.parentNode;

    if (get_first_child(parent) === elem){
        return elem + " is the first child of " + parent;

    } else if (get_last_child(parent) === elem){
        return elem + " is the last child of " + parent;
    }

    return elem + " is somewhere inside " + parent;

}

var text_or_nothing = function(elem){

    if (has_children(elem)){
        return false
    }

    return elem.textContent;
}

var set_text = function(id, text){

    var elem = document.getElementById(id);

    if(!has_children(elem)){
        elem.textContent = text;
    }

    return false;
}

var list = document.getElementById("list"),
    list_first = get_first_child(list);

log(list_first.textContent);

var my_form = document.getElementById("my-form"),
    legend = my_form.getElementsByTagName("legend")[0];

log(legend.textContent);

var input = document.getElementById("input-element"),
    inputParent = input.parentNode;

log(inputParent);

var h2 = document.getElementById("subheader");

h2.textContent = "this text was dynamically inserted!";

var text_block = document.getElementById("text-block"),
    next_sibling = text_block.nextElementSibling;

log(next_sibling.textContent);

log(firs_or_last(legend));

