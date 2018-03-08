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
			kState[0] = true;
		if(e.keyCode == KEY_RIGHT)
			kState[1] = true;
		if(e.keyCode == KEY_UP)
			kState[2] = true;
		if(e.keyCode == KEY_DOWN)
			kState[3] = true;
		if (e.keyCode == KEY_SPACE)
			kState[4] = true;
		if (e.kCode == KEY_P)
			kState[5] = true;
		

	});

	$(document).keyup(function(e){

		if(e.keyCode == KEY_LEFT)
			kState[0] = false;
		if(e.keyCode == KEY_RIGHT)
			kState[1] = false;
		if(e.keyCode == KEY_UP)
			kState[2] = false;
		if(e.keyCode == KEY_DOWN)
			kState[3] = false;
		if (e.keyCode == KEY_SPACE)
			kState[4] = false;
		if (e.kCode == KEY_P)
			kState[5] = false;

	});
}
