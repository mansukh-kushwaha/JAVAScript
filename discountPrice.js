// Create a function discountPrice that takes two positional arguments: price and discountPercentage. If no discount is provided, it should default to 10%.

function discountPrice(price,discountPercentage=10){
        console.log("Your bill price is",price,"and your discount percentage is",discountPercentage);       
}
discountPrice(45000,15)