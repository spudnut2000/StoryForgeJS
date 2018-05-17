var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 38;
var KEY_DOWN = 40;

var KEY_SPACE = 32;

var KEY_P = 112;


var keyState = [false, false, false, false, false, false];

function initKeyboard()
{
	$(document).keydown(function(e){

		if(e.keyCode == KEY_LEFT)
			keyState[0] = true;
		if(e.keyCode == KEY_RIGHT)
			keyState[1] = true;
		if(e.keyCode == KEY_UP)
			keyState[2] = true;
		if(e.keyCode == KEY_DOWN)
			keyState[3] = true;
		if (e.keyCode == KEY_SPACE)
			keyState[4] = true;
		if (e.kCode == KEY_P)
			keyState[5] = true;
		

	});

	$(document).keyup(function(e){

		if(e.keyCode == KEY_LEFT)
			keyState[0] = false;
		if(e.keyCode == KEY_RIGHT)
			keyState[1] = false;
		if(e.keyCode == KEY_UP)
			keyState[2] = false;
		if(e.keyCode == KEY_DOWN)
			keyState[3] = false;
		if (e.keyCode == KEY_SPACE)
			keyState[4] = false;
		if (e.kCode == KEY_P)
			keyState[5] = false;

	});
}
