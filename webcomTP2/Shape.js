function Shape(x, y){
    this.center = new Point(x, y);
}
Shape.prototype.draw = function(){};
Shape.prototype.setCenter=function(center){
    this.center=center;
}
Shape.prototype.getCenter=function(){
    return this.center;
}