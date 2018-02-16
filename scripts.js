var button = document.getElementById('button');

button.addEventListener('click', buttonClick); 

function buttonClick(e){
	console.log('clicked')
};

var activeId = '1':
Element = document.getElementbyID(activeId);
Element.style.background = "red";

document.onKeyUp = keyPress;

function keyPress(e) {
	var oldId = activeId;
	var key =(window.event) ? event.keyCode : e.keyCode;
	switch(key) {
		case 40: 
			activeId++;
			break;
		case 38:
			activeId--;
			break;	
	}

	
}