class Persion{
    firstname:string
    lastName:string
}

class Persion2{
    firstName:string
    lastName:string
    
    constructor(firstName:string, lastName:string){
        this.firstName = firstName
        this.lastName = lastName
    }
}

class Persion3{
    /**
     * This way is short way to create constructor with declare varaible.
     * This is equals with classPersion2
     * @param firstName 
     * @param lastName 
     * @param age 
     */
    constructor(public firstName:string, private lastName:string, protected age:number){
    }
}

//Class without constructor
var aPersion = new Persion()
aPersion.firstname = 'Kritchat'
aPersion.lastName = 'Rojanaphruk'
console.log(aPersion);


//Class with constructor
var aPersion2 = new Persion2('Kritchat', 'Rojanaphruk')
console.log(aPersion2);


//Class with constructor, short way to create varaible
var aPersion3 = new Persion3('Kritchat', 'Rojanaphruk', 25)
console.log(aPersion3);
