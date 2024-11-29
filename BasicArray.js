// q1:-Takes an array of numbers.
// Filters out odd numbers from the array.
// Squares the remaining even numbers.

let arr=[1,2,3,4,5,6,7,8,9,10]
let arreven=[]
let arrodd=[]
for(i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
       arreven.push(arr[i]*arr[i])
    }
    else{
        arrodd.push(arr[i])
    }
}
console.log(arreven,"\n",arrodd)

//  q2:-Write a program that counts the number of even and odd elements in a given array of integers. Use a for and for in loop both  loop for this task

let arr1=[23,43,11,12,1,2,5,45,65,6,5,4,534,34,34,324,23,23,45,4,5,4,54]
let ce=0
let co=0
for(i=0;i<arr1.length;i++)
{
    if(arr1[i]%2==0){
        ce++
    }
    else{
        co++
    }
}
console.log("Total even number is ",ce)
console.log("Total odd number is ",co)

// q3:- Create a program that an  array of integers and returns a new array with all duplicate elements removed. Use nested loops
let arr=[12,32,44,32,45,654,4,665,45,654,23,2,12,34,45,67,45,67,87,32]
let arr1=[]
let k=0
console.log("Array before removing duplicate element:",...arr)
for(i=0;i<arr.length;i++)
{
    let dup=0
    for(let j=0;j<k;j++)
    {
        if(arr[i]==arr1[j])
        {
            dup=1
            break
        }  
    }
    if(!dup){
        arr1[k]=arr[i]
        k++
    }
}
console.log("\nArray after removing duplicate element:",...arr1)

// q4:-Write a program to find the second largest number in an array. Avoid using built-in sorting methods.

let arr4=[12,32,44,32,45,654,4,665,45,654,23,2,12,34,45,67,45,67,87,32]
let max=0
let smax=0
for(i=0;i<arr4.length;i++)
{
    if(arr4[i]>max)
    {
        smax=max
        max=arr4[i]
    }
    else if(arr4[i]>smax && arr4[i]!==max){
        smax=arr4[i]
    }
}
if(smax===0)
{
    console.log("Not second max found"); 
}
else{
    console.log(smax); 
}



 // q5:-Write a program that  an array of numbers and returns a new array where each element is multiplied by its index in the original array. (store all that values in a new array)
let arr5=[12,32,44,32,45,654,4,665,45,654,23,2,12,34,45,67,45,67,87,32]
let arr5_1=[]
for(i=0;i<arr5.length;i++)
{
    arr5_1.push(arr5[i]*i)
}
console.log("\n",...arr5_1)

// q6:-Write a program that merges two arrays into one without using built-in concatenation methods. Use a loop to append the elements of the second array to the first.
let arr6=[12,32,44,32,45,654,4,665]
let arr6_1=[45,23,2,12,34,45,67,45,67,87,32]
for(i=0;i<arr6_1.length;i++)
{
    arr6[arr6.length]=arr6_1[i]
}
console.log("\n",...arr6);
