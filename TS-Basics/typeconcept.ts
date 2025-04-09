let test = "Typescript"; //type = string -> CT -> Type Inference
let num:number = 24; //Type Annotation


//null and undefined
let city:null = null;
let country:undefined = undefined;

//void: function does not return any value
function PrintHello():void{
    console.log("Hello");
}

function PrintNumber(): number{
    return 23;
}

function ReturnString() : string{
    return 'Madhes';
}

function ReturnAnyType() : any{
    return 'Any';
    // return '1';
    // return 'true';
}

function Addition(a,b){
    return a + b;
}

PrintHello();
console.log(PrintNumber());
console.log(ReturnString());
console.log(ReturnAnyType());
console.log(Addition('Mad',true));