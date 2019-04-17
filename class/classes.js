var Persion = /** @class */ (function () {
    function Persion() {
    }
    return Persion;
}());
var Persion2 = /** @class */ (function () {
    function Persion2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Persion2;
}());
var Persion3 = /** @class */ (function () {
    /**
     * This way is short way to create constructor with declare varaible
     * This is equals with classPersion2
     * @param firstName
     * @param lastName
     * @param age
     */
    function Persion3(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Persion3;
}());
//Class without constructor
var aPersion = new Persion();
aPersion.firstname = 'Kritchat';
aPersion.lastName = 'Rojanaphruk';
console.log(aPersion);
//Class with constructor
var aPersion2 = new Persion2('Kritchat', 'Rojanaphruk');
console.log(aPersion2);
//Class with constructor, short way to create varaible
var aPersion3 = new Persion3('Kritchat', 'Rojanaphruk', 25);
console.log(aPersion3);
