// Write a function calculatePrice that takes two arguments: price and taxRate. If taxRate is not provided, it should default to 5%.

function calculatePrice(price,taxrate=5){
        return price*taxrate/100
}

let call=calculatePrice(450000,30)
console.log(call);
