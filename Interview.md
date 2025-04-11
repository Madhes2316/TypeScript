09-04-2025
learning - 1
1. TS is a compile type language - gives flexibility when compiling,additonal syntax over JS,can find error easily
2. JS is run time language - everything decided at the run time
3. //.ts -> tsc(TS compiler) -> .js - javascript runtime env - Browser,nodejs,runtime e.t.c.
4. JS is dynamically typed language,TS is a statically typed language
5. let test = "Typescript" //type = string -> CT -> Type Inference
6. let num:number = 24 -> Type Annotation
files : arraysconcept.ts,typeconcept.ts
Interview Words : Compile time,run time,Type Inference,Type Annotation

Learning - 2
Tuple/Array
1. Tuple : fixed size,order matters
2. Array : Dynamic : runtime more values can be added
3. When Initializing it should be only as per the number of types we give in tuple
   Eg: 
        let people:[string,number] = ['Madhes',23]; correct
        let people:[string,number] = ['Madhes',23,'Madhu',32]; wrong
4. But after declaring push is fine
   Eg:
        let people:[string,number] = ['Madhes',23];
        people.push('Madhu',32); correct
files : tupleconcept.ts

enum
1. Enum: Enumeration : data types: hold the set of constants
2. numeric,string,hetergenous
Interview words : Tuple vs Array


11-04-2025
Type Assertion
1. using <> 
2. using as keyword

Arrow Function/Fat Arrow
1. => - arrow function/fat arrow
