var test = "Typescript"; //type = string -> CT -> Type Inference
var num = 24; //Type Annotation
//null and undefined
var city = null;
var country = undefined;
//void: function does not return any value
function PrintHello() {
    console.log("Hello");
}
function PrintNumber() {
    return 23;
}
function ReturnString() {
    return 'Madhes';
}
function ReturnAnyType() {
    return 'Any';
    // return '1';
    // return 'true';
}
function Addition(a, b) {
    return a + b;
}
PrintHello();
console.log(PrintNumber());
console.log(ReturnString());
console.log(ReturnAnyType());
console.log(Addition('Mad', true));
