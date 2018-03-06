/*
   Sprite.js
*/
var Sprite = function(filename, is_pattern, id){
   //Contruction
   this.image = null;
   this.pattern = null;
   this.TO_RADIANS = Math.PI/180;
   this.id = id;

   /*Spritesheet vars*/
   this.animationDelay = 0;
   this.animationIndexCounter = 0;
   this.animationCurrentFrame = 0;


   if (filename != undefined && filename != "" && filename != null){
      this.image = new Image();
      this.image.src = filename;
      console.log("Loaded sprite: " + filename);

      if(is_pattern){
         this.pattern = Context.context.createPattern(this.image, 'repeat');
      }
      } else {
         console.log("Unable to load sprite: " + filename + " - Object is null or undefined");
      }

   //Draw
   this.draw = function(x, y, w, h){

   //Pattern?
   if(this.pattern != null){
      Context.context.fillStyle = this.pattern;
      Context.context.fillRect(x, y, w, h);
   } else {
      if (w == undefined || h == undefined){
         Context.context.drawImage(this.image, x, y, tile_size, tile_size);
      } else{
      //Stretched
         Context.context.drawImage(this.image, x, y, w, h);
      }
   }
};

   /*Draw animated*/
   this.drawAnimated = function(x, y, spriteSheetIndex)
   {
      if (spriteSheetIndex.length != undefined)
      {
         if(this.animationDelay++ >= 3)
         {
            this.animationDelay = 0;
            this.animationIndexCounter++;
            if (this.animationIndexCounter >= spriteSheetIndex.length)
               this.animationIndexCounter = 0;
            this.animationCurrentFrame = spriteSheetIndex[this.animationIndexCounter];
         }
         
         var res = i2xy (this.animationCurrentFrame, 1);  

         Context.context.drawImage(this.image, res[0]*tile_size, res[1]*tile_size, tile_size, tile_size, x, y, tile_size, tile_size);
      }
   };

   //Rotate
   this.rotate = function(x, y, angle){
      Context.context.save();
      Context.context.translate(x, y);
      Context.context.rotate(angle * this.TO_RADIANS);
      Context.context.drawImage(this.image, -(this.image.width/2), -(this.image.height/2));
      Context.context.restore();
   };
};
