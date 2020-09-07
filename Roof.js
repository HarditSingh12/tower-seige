class Roof{
    constructor(x,y){
        var options={
            friction:1.25,
            isStatic:true,
            density:1.34
        }
        this.body = Bodies.rectangle(x,y,205,45,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,205,45);
    }
}