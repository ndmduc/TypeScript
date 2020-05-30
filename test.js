// var message:string = "Hello world"
// console.log(message);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var name1:string = "John"; 
// var score1:number = 50;
// var score2:number = 42.50
// var sum = score1 + score2 
// console.log("name"+name1) 
// console.log("first score: "+score1) 
// console.log("second score: "+score2) 
// console.log("sum of the scores: "+sum)
// var str = '1' 
// var str2:number = <number> <any> str   //str is now of type number 
// console.log(typeof(str2))
// var num = 2;    // data type inferred as  number 
// console.log("value of num "+num); 
// num = "12";
// console.log(num);
// Variable scope
// var global_num=12;
// class Numbers{
//     num_val=13;
//     static sval = 10;
//     storeNum():void{
//         var local_num=14;
//     }
// }
// console.log("Global num:" + global_num)
// console.log(Numbers.sval)
// var obj = new Numbers()
// console.log("Local val: " + obj.num_val)
// console.log(typeof global_num)
// foreach
// var j:any;
// var n:any = "a b c"
// for(j in n){
//     console.log(n[j])
// }
// // function
// function greet():string{
//     return "Hello world"
// }
// var msg = greet()
// console.log(msg)
// function test_param(n1, s1:string){
//     console.log(n1)
//     console.log(s1)
// }
// test_param(13, "this is a string")
// // optional param
// function disp_details(id:number, name:string, mail_id?:string){
//     console.log("ID:", id); 
//    console.log("Name",name); 
//    if(mail_id!=undefined)
//    console.log("Email Id",mail_id)
// }
// disp_details(123,"John");
// disp_details(111,"mary","mary@xyz.com");
// // rest param
// function addNumbers(...nums:number[]){
//     var i;
//     var sum:number=0;
//     for(i=0;i<nums.length;i++){
//         sum+=nums[i]
//     }
//     console.log("sum of the numbers",sum)
// }
// addNumbers(1,2,3) 
// addNumbers(10,10,10,10,10)
// // default param
// function calculate_discount(price:number,rate:number = 0.50) { 
//     var discount = price * rate; 
//     console.log("Discount Amount: ",discount); 
//  } 
//  calculate_discount(1000) 
//  calculate_discount(1000,0.30)
//  // anonymous function
//  var res = function(a:number, b:number){
//      return a*b;
//  }
//  console.log(res(12,2))
//  // lamda function
// //  var foo = (x:number)=>10+x
// //  console.log(foo(199))
// var foo = (x:number)=>{
//     x +=10;
//     console.log(x)
// }
// foo(100)
// Number
// var month=0
// if(month<=0 || month>12){
//     month = Number.NaN
//     console.log("Month is " + month)
// }else{
//     console.log("Value accepted")
// }
// Prototype
// function employee(id:number, name:string){
//     this.id = id
//     this.name = name
// }
// var emp=new employee(123, "Sow")
// employee.prototype.email = "Sow@gamil.com"
// console.log("Employee 's Id: "+emp.id) 
// console.log("Employee's name: "+emp.name) 
// console.log("Employee's Email ID: "+emp.email)
// Array
// var alphas:string[]
// alphas=["1","2","3","4"] 
// var alphas:string[]=["1","2","3","4"]
// console.log(alphas[0]); 
// console.log(alphas[1]);
// var j
// for(j in alphas){
//     console.log(alphas[j])
// }
// Tuple
// var mytuple = [10, "Hello"]
// console.log(mytuple[0]) 
// console.log(mytuple[1])
// var mytuple = [10,"Hello","World","typeScript"]; 
// console.log("Items before push "+mytuple.length)    // returns the tuple size 
// mytuple.push(12)                                    // append value to the tuple 
// console.log("Items after push "+mytuple.length) 
// console.log("Items before pop "+mytuple.length) 
// console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
// console.log("Items after pop "+mytuple.length)
// Union
// var val:string|number
// val=12
// console.log("numeric value of val "+val) 
// val = "This is a string" 
// console.log("string value of val "+val)
// function disp(name:string|string[]){
//     if(typeof name == "string"){
//         console.log(name)
//     }else{
//         var i;
//         for(i=0;i<name.length;i++){
//             console.log(name[i])
//         }
//     }
// }
// disp("mark") 
// console.log("Printing names array....") 
// disp(["Mark","Tom","Mary","John"])
// ////////////////////////////////////
// var arr:number[]|string[]; 
// var i:number; 
// arr = [1,2,4] 
// console.log("**numeric array**")  
// for(i = 0;i<arr.length;i++) { 
//    console.log(arr[i]) 
// }  
// arr = ["Mumbai","Pune","Delhi"] 
// console.log("**string array**")  
// for(i = 0;i<arr.length;i++) { 
//     console.log(arr[i]) 
//  }
// Interface
// interface IPerson{
//     firstName:string,
//     lastName:string,
//     sayHi:()=>string
// }
// var customer:IPerson={
//     firstName:"Tom",
//     lastName:"Jerry",
//     sayHi: ():string=>{return "Hi there"}
// }
// console.log("Customer Object ") 
// console.log(customer.firstName) 
// console.log(customer.lastName) 
// console.log(customer.sayHi())
// interface RunOptions{
//     program:string,
//     commandLine:string[]|string|(()=>string)
// }
// var options:RunOptions={program:"test1",commandLine:"Hello"};
// console.log(options.commandLine)
// options = {program:"test1",commandLine:["Hello", "World"]}
// console.log(options.commandLine[0])
// console.log(options.commandLine[1])
// options = {program:"test11", commandLine:()=>{return "Hello world"}}
// var fn:any = options.commandLine
// console.log(fn())
// interface namelist{
//     [index:number]:string
// }
// // var list2:namelist=["John",1,"Bran"]
// interface ages{
//     [index:string]:number
// }
// var agelist:ages;
// // agelist["jon"]=23
// // agelist[2]="nnie"
// interface Person{
//     age:number
// }
// interface Musician extends Person{
//     instrument:string
// }
// var drummer=<Musician>{}
// drummer.age=23
// drummer.instrument="Drum"
// console.log("Age:  "+drummer.age); console.log("Instrument:  "+drummer.instrument)
// interface IParent1 { 
//     v1:number 
//  } 
//  interface IParent2 { 
//     v2:number 
//  } 
//  interface Child extends IParent1, IParent2 { } 
// var Iobj:Child = { v1:12, v2:23} 
// console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
// Class
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is: " + this.engine);
    };
    return Car;
}());
var obj = new Car("Engine 1");
console.log("Reading attribute engine: " + obj.engine);
obj.disp();
// Class inheritance
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle: " + this.Area);
    };
    return Circle;
}(Shape));
var obj1 = new Circle(134);
obj1.disp();
// Class inheritance multi-level
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child));
var obj2 = new Leaf();
obj2.str = "hello";
console.log(obj2.str);
// Class inheritance & method overriding
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("doPrint() from Parent called.");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("doPrint() is printing a string…");
    };
    return StringPrinter;
}(PrinterClass));
var obj3 = new StringPrinter();
obj3.doPrint();
// Static
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is: " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
StaticMem.disp();
// instanceof
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj4 = new Person();
var isPerson = obj4 instanceof Person;
console.log("obj4 is an instance of person " + isPerson);
// Data hiding
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj5 = new Encapsulate();
console.log(obj5.str);
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj6 = new AgriLoan(10, 1);
console.log("Interest is: " + obj6.interest + " Rebate: " + obj6.rebate);
// Object
var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { } // type template
};
person.sayHello = function () {
    console.log("hello " + person.firstName);
};
console.log(person.firstName);
console.log(person.lastName);
person.sayHello();
