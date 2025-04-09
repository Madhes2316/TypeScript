var names = ['Hood', 'Micahel', 'Malcolm', 'Jake'];
// console.log(names[2]);
//using Generics
var empNames = ['Hood', 'Micahel', 'Malcolm', 'Jake'];
var empIds = [1, 2, 3, 4];
var empInfo = [1, null, true, 'wow'];
//multi type array
var arr1 = ['Mad', 23, 'Mid', 32];
var arr2 = ['Mad', true, 'Mid', false];
//first array declaration and init
var users;
users = ['Madhes'];
users.push("Madhu");
//Printing the Array values
var employees = ['Hood', 'Micahel', 'Malcolm', 'Jake'];
//Index Based Loop
for (var i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}
//ForEach Loop
employees.forEach(function (empName) {
    console.log(empName);
});
for (var i in employees) {
    console.log(employees[i]);
}
