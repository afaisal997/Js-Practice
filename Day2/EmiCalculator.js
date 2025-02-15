var product = 20000
var rateofInterest= 12
var time = 2

var si = (product * rateofInterest*time)/100
var total = si + product

var emi = (total/(time*12)).toFixed(2)

console.log("Product Price = " + product)
console.log("Rate of Interest = " + rateofInterest)
console.log("Year =" + time)
console.log("Simple Interest = " + si)
console.log("Total Amount = " + total)
console.log("EMI = " + emi)

