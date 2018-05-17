var Matrix = function(){
	this.constructor = function(){
		this.grid = [];
	}

	this.get = function(x,y){
		const col = this.grid[x];
		if(col){
			return col[y];
		}
		return undefined;
	}

	this.set = function(x,y,value){
		if(!this.grid[x]){
			this.grid[x] = [];
		}
		this.grid[x][y] = value;
	}
};