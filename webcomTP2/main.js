function drawShapes(shapes, context){
    for(let shape of shapes){
        shape.draw(context);
    }
}


function main(){
    let circle = new Circle(50);
    circle.setCenter(new Point(100,75));
    let rectangle = new Rectangle(150, 100);
    rectangle.setCenter(new Point(150,30));
    let shapes = [circle, rectangle];
    let canvas = document.getElementById("drawings");
    let context = canvas.getContext("2d");
    drawShapes(shapes, context);
}
main();