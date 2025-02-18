var price = Number(prompt("Enter Price of the product"));
var rateofInterest = Number(prompt("Enter the rate of Interets"));
var time = Number(prompt("Enter Time"));

var si = (price * rateofInterest * time) / 100;
var total = si + price;

var emi = (total / (time * 12)).toFixed(2);

alert(`
    Product Price = ${price}
    Rate of Interest = ${rateofInterest}
    Year = ${time}
    Simple Interest = ${si}
    Total Amount = ${total}
    EMI = ${emi}
    `)


