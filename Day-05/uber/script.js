class Uber
{
    constructor(time,distance)
    {
        this.time = time,
        this.distance = distance
    }

    calculatePrice()
    {
        const str = "Total = Rs."
        const bookingFee = 5;
        const costPerMinute = 10;
        const costPerDistance = 20;
        let price = (this.time * costPerMinute) + (this.distance * costPerDistance) + bookingFee;
        return str + price;
    }
}

const myUber = new Uber(5, 10);

console.log(myUber.calculatePrice());

/*
output: 
Total = Rs.255
*/