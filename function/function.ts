console.log("============== Normal Function ==============");
//Normal function
var add1 = (a, b) => a + b    //a and b can be any value
var add1Rst = add1(10,20)
var add1Rst2 = add1('test',20)  // retsult test20 because javascript allow to do thins
var add1Rst3 = add1(true, 10)  // result is 11 because true === 1
console.log(add1Rst)
console.log(add1Rst2)
console.log(add1Rst3)


console.log("============== Function with specify type ==============");
//Function with specify parameter's type
var add2 = (a:number, b:number) => a + b     // a and b can be number only * if not number system will compile pass with warnning
var add2Rst = add2(1,10)
console.log(add2Rst)


console.log("============== Function with optional parameter ==============");
//Function with optional, type script allow optional. **** for calculate we need to check with 
//need to check c with (c ? c:0) if not result will Nan when we not pass value to c
//** Cannot use parameter deceleration with optional
//for avoid check c we can use function with deceleration. Ex add3(a:number, b:number, c:number = 0) will be work same
var add3 = (a:number, b:number , c?:number) => a + b + (c ? c:0)   //When we need to use optional, just put ? end of parameter
var add3Rst1 = add3(1, 2) //result is 3
var add3Rst2 = add3(1, 2, 10) //result is 3
console.log(add3Rst1);
console.log(add3Rst2);

console.log("============== Function with parameter deceleration ==============");
//Typescript allow parameter with deceleration.
var add4 = (a:number, b:number, c:number = 10) => a + b + c
var add4Rst = add4(10, 10) //result is 30
var add4Rst2 = add4(10, 10, 50) //result is 70
console.log(add4Rst);
console.log(add4Rst2);
