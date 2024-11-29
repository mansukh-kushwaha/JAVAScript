// Filter users who are aged 25 or younger.
// Make the array to get an array of user names.
// Filter orders with an amount greater than 50.
// Make the array to get an array of order IDs.
// Filter users who have at least one order with a status of 'pending'.
// Make the array to get an array of objects containing user names and their total order amounts.
// Filter orders with an amount between 30 and 70.
// Make the array to get an array of objects containing user names and their completed order IDs.
// Filter users who live in the 'USA' and have at least one order with an amount greater than 50

const complexData = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
      },
      orders: [
        { orderId: "A123", amount: 50.75, status: "completed" },
        { orderId: "B456", amount: 30.25, status: "pending" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      address: {
        street: "456 Oak St",
        city: "Othercity",
        country: "USA",
      },
      orders: [
        { orderId: "C789", amount: 100.5, status: "completed" },
        { orderId: "D012", amount: 75.2, status: "completed" },
      ],
    },
    {
        id: 3,
        name: "Tony Stark",
        age: 19,
        address: {
          street: "456 Oak St",
          city: "California",
          country: "USA",
        },
        orders: [
          { orderId: "E456", amount: 55.4, status: "completed" },
          { orderId: "F043", amount: 75.2, status: "pending"},
        ],
      }
  ]

// Filter users who are aged 25 or younger.

let arr=[]
for(i of complexData){
    if(i.age<=25){
        arr.push(i)
    }
}
console.log("All members data whose age is younger than 26:-\n",arr)

// Make the array to get an array of user names.

let arr_name=[]
for(i of complexData){
    arr_name.push(i.name)
}
console.log("All members user name:-\n",arr_name);

// Filter orders with an amount greater than 50.

let arr_orders=[]
for(i of complexData){
  for(j of i.orders){
    if(j.amount>50){
        arr_orders.push(j)
    }
  }
}
console.log("All members orders whose order amount is greater than 50:-\n",arr_orders);

// Make the array to get an array of order IDs.

let arr_id=[]
for(i of complexData){
  for(j of i.orders){
    arr_id.push(j.orderId)
  }
}
console.log("All members Order id:-\n",arr_id);

// Filter users who have at least one order with a status of 'pending'.

let arr2=[]
for(i of complexData){
  for(j of i.orders){
    if(j.status==="pending"){
      arr2.push(i)
    }
  }
}
console.log("All members data whose order status is pending:- \n",arr2);

// Make the array to get an array of objects containing user names and their total order amounts.

let name_ord=[]
for(i of complexData){
    amount=0
    for(j of i.orders){
      amount+=j.amount
    }
    name_ord.push({name:i.name, totalamount:amount})
 }
console.log("All members user name and total order amount is:-\n",name_ord)

// Filter orders with an amount between 30 and 70.

let arr3=[]
for(i of complexData){
  for(j of i.orders){
    if(j.amount>30 && j.amount<70){
        arr3.push(j)
    }
  }
}
console.log("All members order details whose order amount in between 30 and 70 are:-\n",arr3);


// Make the array to get an array of objects containing user names and their completed order IDs.

let id=[]
for(i of complexData){
  complete=[]
    for(j of i.orders){
      if(j.status==="completed"){
            complete.push(j.orderId)
      }
    }
    id.push({name:i.name, completed_order_id:complete})
 }
console.log("All members user name whose order status is completed :-\n",id)

// Filter users who live in the 'USA' and have at least one order with an amount greater than 50.

let arr4=[]
for(i of complexData){
  let count=0
  if(i.address.country==="USA"){
    for(j of i.orders){
      if(j.amount>50){
        count++
      }
    }
  }
  if(count>0){
    arr4.push(i)
  }
}

