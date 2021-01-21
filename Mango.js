class Mango{

   constructor(x,y,diameter){
       var options={   
           isStatic:true,
           'restition':0.5,
           'friction':1.0,
       }
     this.body=Bodies.circle(x,y,diameter,options);
     this.diameter=diameter;
     this.image=loadImage("mango.png");
     World.add(world,this.body);
   }
   display(){
       Push();
       Translate(this.body.position.x,this.body.position.y)
       imageMode(CRNTER);
       image(this.image,0,0,this.diameter);
       Pop();
   }
}