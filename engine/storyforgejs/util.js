// Convert the index to map coordinates
function i2xy(index, mapWidth)
{
	var x = index % mapWidth;
	var y =  Math.floor(index / mapWidth);
	return [x,y];
}

// Convert map to the index coordinates
function xy2i(x,y, mapWidth)
{
	return y * mapWidth + x;
}

