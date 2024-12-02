// Name="nitin"
// console.log('hello ${Name}');

// // anonymous function
// function hello(){
//     console.log("Hello");
    
// }
// hello()

// // function express
// let hello2= function(){
//     console.log("Hello everyone");
    
// }
// hello2()

// // arrow function
// let hello3=()=>{
// console.log("Hello You");
// }
// hello3()

// let sum= function(a,b=5){
//     return a+b
// }
// console.log(sum(59,1));

function grade(eng,hin,sst,maths,science){
    if(eng>=0 && eng<=100 && hin>=0 && hin<=100 && sst>=0 && sst<=100 && maths>=0 && maths<=100 && science>=0 && science<=100){
        let percentage=((eng+hin+sst+maths+science)*100)/500
        if(percentage>=80)
            return "Grade A"
        else if(percentage>=60&&percentage<80)
            return "Grade B"
        else if(percentage>=33 && percentage<60)
            return "Grade C"
        else
        return "Fail"
    }
    else{
        return "Enter valid markss"
    }
}
console.log(grade(70,50,60,70,75));
