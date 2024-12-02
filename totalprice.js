// Write a function getTotalPrice that takes an unknown number of prices as arguments using the rest operator and returns the total price.

function getTotalPrice(...price) {
      let sum=0
      for(i of price){
          sum+=i
      }
      return sum
  }
  
  console.log(getTotalPrice(10, 20, 30));
  console.log(getTotalPrice(5.99, 12.49, 3.50)); 
  console.log(getTotalPrice());
  