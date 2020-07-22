class Slingshot {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
    }
    this.pointB=pointB
    this.band=Constraint.create(options);
    World.add(world,this.band)
    }

    
    
    
    print(){
        if (this.band.bodyA){
        var pointA=this.band.bodyA.position;
        var pointB=this.pointB;
        push ();
        stroke("blue");
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop ();
        }
    }
    fly(){
        this.band.bodyA=null;


    }

}