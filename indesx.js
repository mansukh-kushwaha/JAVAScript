// q1:- print 1 to 100 with while loop
let a=1;
while(a<=100)
{
    console.log(a);
    a++;
}
// // q2:- print reverse number from 100 with while loop
let b=100;
while(b>=1)
{
    console.log(b);
    b--;
}
// q3:- print a to z with while loop
let c=97
while(c<=122)
{
    console.log(String.fromCharCode(c));
    c++;
}
// q4:- print even number between 1 to 100 with while loop
let d=1
while(d<=100)
{
    if(d%2==0)
    {
        console.log(d)  
    } 
    d++;
}
// q5:- print sum of odd number between 1 to 100 with while loop
let e=1
let sum=0
while(e<=100)
{
    if(e%2==1)
    {
        sum+=e
    }
    e++
}
console.log(sum);

// q6:-
let arr=[5,1,4,7,9,6,3,2]
for(i=0;i<=7;i++)
{
    if(arr[i]>3)
        console.log(arr[i])
}

let arr1=[5,1,4,7,9,6,3,2]
let s=0
len=arr.length
for(i=0;i<len;i++)
{
    s+=arr1[i];
}
console.log(s)

// let arr=[2,1,4,7,5,6,9,2,34,6,45,89,1]
// let max=arr[0]
// len=arr.length
// for(i=0;i<len;i++)
// {
//     if(arr[i]>max)
//         max=arr[i]

// }
// console.log(max)
