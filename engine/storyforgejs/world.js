// Global vars
var mapIndex = 0;
var mapSizeX = 0;
var mapSizeY = 0;

var World = function(sizeX, sizeY, matrix, tileSize)
{
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.tileSize = tileSize;

	this.createMatrix = function(){
		console.log("Creating matrix...");
		for (var y = 0; y < sizeY; y++)
		{
			for (var x = 0; x < sizeX; x++, mapIndex++)
			{
				var posX = x * tileSize;
				var posY = y * tileSize;
				matrix.set(posX, posY, 1);
				Context.context.rect(posX, posY, tileSize-2, tileSize-2);
				Context.context.stroke;
			}
		}
	}
};
