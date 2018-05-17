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

// Sleep
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

