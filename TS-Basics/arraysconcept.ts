let names: string[] = ['Hood','Micahel','Malcolm','Jake'];
// console.log(names[2]);


//using Generics
let empNames : Array<string> = ['Hood','Micahel','Malcolm','Jake'];
let empIds : Array<number> = [1,2,3,4];
let empInfo : Array<any> = [1,null,true,'wow'];


//multi type array
let arr1 : (string | number)[] = ['Mad',23,'Mid',32];
let arr2 : Array<string | boolean> = ['Mad',true,'Mid',false];


//first array declaration and init
let users : Array<string>;
users = ['Madhes'];
users.push("Madhu");


//Printing the Array values
let employees : Array<string> = ['Hood','Micahel','Malcolm','Jake'];

//Index Based Loop
for(let i=0 ; i < employees.length ; i++){
    console.log(employees[i]);
}

//ForEach Loop
employees.forEach(empName => {
    console.log(empName);
});

for(let i in employees){
    console.log(employees[i]);
}