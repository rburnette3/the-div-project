var button = document.getElementById('button');

button.addEventListener('click', buttonClick); 

function buttonClick(e){
	console.log('clicked')
};



var active_id = '1';
Element = document.getElementById(active_id);
Element.style.background = "blue";

document.onkeyup = KeyCheck;

function KeyCheck(e) {
    var old_id = active_id;
    var Key = (window.event) ? event.keyCode : e.keyCode;
    switch (Key) {
        case 40:
            active_id++;
            break;
        case 38:
            active_id--;
            break;
    }
    if (active_id < 1) active_id += 4;
    if (active_id > 4) active_id -= 4;
    Old = document.getElementById(old_id);
    Old.style.background = 'initial' = "red";
    New = document.getElementById(active_id);
    New.style.background = "blue";
    document.getElementById('text').innerHTML = active_id;
};