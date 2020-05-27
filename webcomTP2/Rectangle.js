
function Rectangle(width, height){
    this.width=width;
    this.height=height;
}
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.getWidth=function(){
    return this.width;
}
Rectangle.prototype.getHeight=function(){
    return this.getHeight;
}
Rectangle.prototype.draw=function(ctx){
    console.log("Rectangle Drawing");
    ctx.beginPath();
    ctx.rect(this.getCenter().getX(), this.getCenter().getY(), this.width, this.height);
    ctx.stroke();
};