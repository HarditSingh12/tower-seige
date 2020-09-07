class Balls{
    constructor(x,y){
        var options = {
            isStatic:false,
            
           

    }
    this.body = Bodies.circle(x,y,15,options);
    World.add(world,this.body);
   
}
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,25);
}
}