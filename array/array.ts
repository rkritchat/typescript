//Normal Arrar
console.log("============== Normal Array ==============");
var myArr = [7,2,1]
console.log(myArr);

console.log("============== Array with specific type ==============");
var myArr2:number[] = [1, 2]  //allow number only
console.log(myArr2);

console.log("============== Array with couple ==============");
var myArr3:[number, boolean] = [1, true]  //allow just number and boolean and can assign only 2 value
console.log(myArr3);


myArr.sort() // sort data from min to max
myArr.reverse() // sort data from max to min

var num1 = myArr.shift()   //grep first value in array and delete it from array
console.log(num1);
console.log("length: " + myArr.length);

var num2 = myArr.pop()     //grep last value in array and delete it from array
console.log(num2);
console.log("length: " + myArr.length);
