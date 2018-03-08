var Sound = function(filename){
	this.filename = filename;
	this.audio = new Audio(filename);

	this.play = function(){
		this.audio.play();
	}

	this.loop = function(){
		this.audio.addEventListener('ended', function() {
	    this.audio.currentTime = 0;
	    this.audio.play();
	}, false);

	this.audio.play();
	}
};