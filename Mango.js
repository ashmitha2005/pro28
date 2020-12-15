class Mango{

    constructor(x,y,r){
    
    
       var options = {
       isStatic: true,
       restitution: 0,
       friction: 1,
        }
   
        this.x=x;
        this.y=y;
        this.r=r;
        
        
        this.body=Bodies.circle(this.x, this.y, this.r,  options);
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
       }
       display(){
          
        var pos =this.body.position; 
        push();
        translate(pos.x , pos.y);
        imageMode(CENTER);
        fill("white");
        stroke("white")
        strokeWeight("0");
        ellipse(0,0,this.r, this.r);
        image(this.image,0,0,100,100);
        pop();
       

      }
   }
   
    
   
   
   