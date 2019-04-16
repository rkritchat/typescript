var a:number
var b:string
var c:boolean
var d:any
var e: number | boolean

//Valid in typescritp
a = 10
b = 'test'
c = true

//d type is 'any' then we can assign any value witout eror
d = 10
d = 'as'

//e is union type, can be assign number or boolen
e = 10
e = true

//Invalid in tpye script but can compile to javascript, *compile with warinning
//a = 'test'


//Implicit typing
var z = 10  //Do this equals z:number = 10
//z = 'test'  will be error because the first value assing to z is type number then z is type number