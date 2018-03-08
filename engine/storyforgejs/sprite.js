/*
   Sprite.js
*/
var Sprite = function(filename, is_pattern, id){
   //Contruction
   this.image = null;
   this.pattern = null;
   this.TO_RADIANS = Math.PI/180;
   this.id = id;


   /*Physics*/
   //Gravity
   this.x = 0;
   this.y = 0;
   this.speedX = 0;
   this.speedY = 2;
   this.gravity = 0.05;
   this.gravitySpeed = 0.05;
   this.isJumping = false;

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
   this.drawAnimated = function(x, y, spriteSheetIndex, spriteSheetRows, size)
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
         
         var res = i2xy (this.animationCurrentFrame, spriteSheetRows);  

         Context.context.drawImage(this.image, res[0]*size, res[1]*size, size, size, x, y, size, size);
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


   /*Physics*/
   this.applyGravity = function(){
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += this.speedY + this.gravitySpeed;
      this.hitBottom();
   };

   this.accelY = function(amount){
      this.gravity = amount;
   };
   this.accelX = function(amount){
      this.speedX = amount;
   };
   this.jump = function(amount){
      if(!this.isJumping){
         this.isJumping = true;
         this.gravity = -amount;
      } else {
         this.isJumping = false;
      }
   }

   this.hitBottom = function(){
      var rockbottom = Context.canvas.height - 32;
      if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
   };
};
