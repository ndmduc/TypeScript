// boolean
let isDone: boolean = false;

// number
let decimal:number =6;
let hex:number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
color = 'read';

let fullName: string = `Bob Bobbington`;
let age: number = 34;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age+1} years old next month.`;

// Array
let list: number[] =  [1,2,3]
let list1: Array<number> = [1,2,3]

// Tuple
let x: [string, number];
x = ["hello", 10];
console.log(x[0].substring(1));

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Red;
// By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:
//Or, even manually set all the values in the enum:
enum Color1{Red=1, Green, Blue}
let c1: Color1 = Color1.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

notSure.ifItExists(); //ok, ifItExists might exist at runtime
notSure.toFixed(); //ok, toFixed exists (but the compiler does not check)

let prettySure: Object =4;
prettySure.toFixed(); // prop 'toFixed' doesnot exist on type Object

let list2: any[] = [1, true, "fee"]
list2[1]=100;

// Void
function warnUser(): void{
    console.log('This is my warning message');
}
let unusable: void = undefined;
unusable = null //ok, if `--strictNullChecks' is not given

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never{
    throw new Error(message);
}

// Inferred return type is never
function fail(){
    return error("Something failed")
}

// Function returning never must ...
function infiniteLoop(): never{
    while(true){}
}

// Object
declare function create(o: object | null): void;
create({prop:0}); //OK
create(null);

create(42);
create("string");
create(false);
create(undefined)

// Type assertions ~ type cast
let someValue: any = "this is string"
let strLength: number = (<string>someValue).length
// or
let strLength1: number = (someValue as string).length;

