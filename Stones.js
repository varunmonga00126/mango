class Stones{
           constructor(x,y,diametre)  {
               var options={
                   isStatic:false,
                   restitution:0,
                   friction:1,
                   density:1.2,
               }
             this .body=Bodies.circle(x,y,diametre,options);
             this.diametre=diametre
             this.image=loadImage("stone.png")
             World.add(world,this.body)
           }

          display(){
        Push();
        translate(THIS.body.position.x,this.body.position.y)
         imageMode(CENTER)
         image(this.image,0,0,this .diametre);
            Pop();
          }


}