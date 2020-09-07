class Chain {
    constructor(BodyA,BodyB){
       
        var options={
          'bodyA': BodyA,
          'bodyB': BodyB,
          'length':10,
          'stiffness':0.10,
      }

      this.chain = Matter.Constraint.create(options);
      World.add(world,this.chain);
    }

      fly(){
          this.chain.BodyB = null;
      }
    
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}