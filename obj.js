// q1 find user play chess or not
let user ={
    name:"sachin",
    age:20,
    address:{
        city:"jaipur",
        state:"rajasthan",
        country:"india"
    },
  
    hobbies:["cricket","football",["chess","sudoko"],"reading"],
    isMarried:false 
        
}
// 
for(i of user.hobbies)
{
    if(Array.isArray(i))
    {
        for(j of i)
        {
            if(j==="chess")
            {
                console.log("He play chess");
                
            }
        }
    }
}
// if we know index of inner array then we use includes() method
// if(user.hobbies[2].includes("chess"))
// {
//     console.log("he play chess");
    
// }


// q2 1->Find total salary of all employees
//    2->Count number of Male and Female
//    3->Count how many employees salary is greater than 40000.


let data = [{
    "id": 1,
    "first_name": "Annissa",
    "last_name": "Rubinov",
    "email": "arubinov0@prweb.com",
    "gender": "Female",
    "ip_address": "4.25.213.14",
    "salary":38800
  }, 
  {
    "id": 2,
    "first_name": "Sarena",
    "last_name": "Gut",
    "email": "sgut1@usda.gov",
    "gender": "Female",
    "ip_address": "165.183.145.15",
    "salary":40000
  }, {
    "id": 3,
    "first_name": "Jacquette",
    "last_name": "Leal",
    "email": "jleal2@cmu.edu",
    "gender": "Female",
    "ip_address": "136.79.88.6",
    "salary":45000
  }, {
    "id": 4,
    "first_name": "Fawne",
    "last_name": "Purkins",
    "email": "fpurkins3@free.fr",
    "gender": "Female",
    "ip_address": "41.96.173.217",
    "salary":30000
  }, {
    "id": 5,
    "first_name": "Zacharia",
    "last_name": "Elvins",
    "email": "zelvins4@yandex.ru",
    "gender": "Male",
    "ip_address": "12.218.236.92",
    "salary":22000
  }, {
    "id": 6,
    "first_name": "Karim",
    "last_name": "Harpur",
    "email": "kharpur5@slashdot.org",
    "gender": "Male",
    "ip_address": "39.140.108.163",
    "salary":55000
  }, {
    "id": 7,
    "first_name": "Doyle",
    "last_name": "Batham",
    "email": "dbatham6@cdbaby.com",
    "gender": "Male",
    "ip_address": "146.186.250.17",
    "salary":90000
  }, {
    "id": 8,
    "first_name": "Base",
    "last_name": "Lakey",
    "email": "blakey7@hubpages.com",
    "gender": "Male",
    "ip_address": "249.124.77.126",
    "salary":48000
  }, {
    "id": 9,
    "first_name": "Jeremiah",
    "last_name": "Champley",
    "email": "jchampley8@samsung.com",
    "gender": "Male",
    "ip_address": "64.143.25.17",
    "salary":34000
  }]
let sum=0
let cm=0
let cf=0
let cs=0
for(d of data)
{
    sum+=d.salary
    if(d.gender==="Male"){
      cm++
    }
    else{
      cf++
    }
    if(d.salary>40000){
      cs++
    }

}
console.log("Total salary of all employees is: ",sum);
console.log("Total number of Male work are:",cm);
console.log("Total number of Female are:",cf);
console.log("Total number of employees with salary greater than 40,000 are:",cs);




