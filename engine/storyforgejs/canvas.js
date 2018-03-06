/*var Context = {
    canvas: null,
    context: null,
    create: function(canvas_tag_id){
    this.canvas = document.getElementById(canvas_tag_id);
    this.context = this.canvas.getContext('2d');
    return this.context;
   }
};*/

var HTML = function(canvasID, width, height)
{

   this.width = width;
   this.height = height;
   this.canvas = null;
   this.context = null;
   this.canvas = document.getElementById(canvasID);
   this.context = this.canvas.getContext('2d');
   $(this.canvas).attr({style: 'width:' + this.width + 'px;' + 'height:' + this.height + 'px;' + 'border:3px dotted black;' + 'margin: auto;' });

};

var cls = function(){
  Context.context.save();
  Context.context.clearRect(0,0, Context.canvas.width, Context.canvas.height);
  Context.context.restore();
}
