class Circle
{
    constructor(radius, color)
    {
        this.radius = radius,
        this.color = color
    }

    getRadius()
    {
        return this.radius;
    }

    setRadius(newRadius)
    {
        this.radius = newRadius;
    }

    getColor()
    {
        return this.color;
    }

    setColor(newColor)
    {
        this.color = newColor;
    }

    toString()
    {
        return console.log(`Circle[radius = ${this.radius}, color = ${this.color}]`);
    }

    getArea()
    {
        return (Math.PI * Math.pow(this.radius,2)).toFixed(2);
    }

    getCircumference()
    {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
}

const r = new Circle(1.0,"red");
console.log(r);
r.toString();

console.log("Get circle radius: ",r.getRadius());
console.log("Get circle color: ", r.getColor());

r.setRadius(5.0);
console.log('radius changed to:',r.getRadius());
r.setColor("blue");
console.log('color changed to:',r.getColor());


console.log("Area: ",r.getArea());
console.log("circumference: ",r.getCircumference());

r.toString()



/*
output:

Object { radius: 1, color: "red" }
Circle[radius = 1, color = red]
Get circle radius:  1
Get circle color:  red
radius changed to: 5
color changed to: blue
Area:  78.54
circumference:  31.42
Circle[radius = 5, color = blue]


*/