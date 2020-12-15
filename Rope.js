class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
        }
        display(){
            var pointA= this.body.bodyA.position;
            var pointB= this.body.bodyB.position;

            //stroke(0);
            strokeWeight (2)
            stroke(255,0,255);
            var line1X = pointA.x
            var line1Y = pointA.y
            
            var line2X = pointB.x+this.offsetX
            var line2Y = pointB.y+this.offsetY
            line (line1X,line1Y,line2X,line2Y);
        }
        
}