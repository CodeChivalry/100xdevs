class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    area(){
        return this.width*this.height;
    }
    paint(){
        console.log(`The rectangle is painted with ${this.color} color`);
    }
}
const rect=new Rectangle(10,5,"blue");
console.log(rect.area());
rect.paint();