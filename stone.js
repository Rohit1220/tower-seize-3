class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0
			}
		this.x=x;
		this.y=y;
        this.r=r
        this.body=Matter.Bodies.polygon(this.x, this.y,50,this.r, [options])
		World.add(world, this.body);
	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,50, this.r);
			pop()
	}
}