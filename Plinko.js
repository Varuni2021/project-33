class Plinko{

    constructor(x,y,r){
        var options ={
            isStatic: true,
            'restitution': 1,
            'friction':0.5,
            'density':1.2
        };
        
        this.r = 10;
        
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
    }

    display(){
     var angle = this.body.angle;

      push()
      ellipseMode(RADIUS);
      fill(255);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0,0,this.r,this.r); 
      pop()

    }
    };