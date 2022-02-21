class Ground
{

    constructor(x,y,w,h)  {
        let options ={
            isStatic:true
        };

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    show()  {
       
        push();        
        rectMode(CENTER)
        stroke(255);
        fill(223);
        rect(this.x,this.y,this.w,this.h);
        pop();
    }
}