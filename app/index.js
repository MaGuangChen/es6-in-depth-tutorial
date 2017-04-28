//從Animal.js匯入Animal的類
import Animal from "./Animal.js"
//讓別的變數變成子類
let king = new Animal("Mufasa",4.5);
console.log(king);
king.hello();

//類(class)的繼承(inheriting)
class  Lion extends Animal {
  constructor(name,height,color){
      //需要一個keyword叫做super，來直接繼承父類的值
      super(name,height);
      this.color = color;
  }
  hello(){
      //可直接重寫並客製化
      console.log(`Hi! I'm ${this.name},from Pride Rock!`)
  }
}
let son = new Lion("simba",2,"golden");
console.log(son);
son.hello();

//static method 這啥啊跟function有何不同咧？
class Calculator {
    static multiply(a,b){
        return a*b;
    }
    static add(a, b){
        return a+b;
    }
}
let a = Calculator.add(5,7);
console.log(a);

//什麼事js prototypes
//classes是從prototypes提出來的
//所有object、array、data都有prototypes
//prototypes是object的父級別

//這個function不是真的要做一個function
//，而是要來裝載一些邏輯表達式

function Wizard(name,house,pet){
  this.name = name;
  this.house = house;
  this.pet = pet;
  this.greet = ()=> `I'm ${this.name} from ${this.house}.`
}
//因為雖然Wizard是新定義的原型，但其上依然有一個最上層的Prototype
//因此我們可以把它當作object來使用，並且使用keyword .prototype
//來為其增加property
Wizard.prototype.pet_name;
//箭頭函數不能使用keyword來增加prototype的屬性，以下為錯誤示範喔
//Wizard.prototype.info = () =>{
    //return `I have a ${this.pet} named ${this.pet_name}`
//};
//要用正常的function宣告方式
Wizard.prototype.wandInfo = function(){
    return `I have a ${this.wand} wand.`
}
let harry = new Wizard("Harry Potter","Gryffindor","Owl");
//harry是巫師的類，因此會繼承巫師的property
harry.pet_name = "Hedwig";
//因為哈利是巫師的子類也被定義為新的prototype，
//使用keyword .prototype來定義之
//harry.prototype.wand是error我在想原因是因為他已經是第三層的類了
//但可以直接用下面的方法去增加property
harry.wand = "Holly wood Phoenix feathers";
console.log(harry);
console.log(harry.greet());
//console.log(harry.info());
console.log(harry.wandInfo());
//可以講講關於原形鍊的事情了
//這只是個原型鍊範例
function Vehicle(make, year) {
  this.make = make;
  this.year = year;  
}
Vehicle.prototype.color;
Vehicle.prototype.bio = function(){
  return `A ${this.color} ${this.make} made in ${this.year}.`;  
}
let s = new Vehicle("Tesla", 2017);
s.color = "black";
console.log(s.bio());
//這是第二個方法
{
function Vehicle(make, year, color) {
  this.make = make;
  this.year = year;
  this.color = color;
  this.bio = () => `A ${this.color} ${this.make} made in ${this.year}.`;
}
let s = new Vehicle("Tesla", 2017);
s.color = "black";
console.log(s.bio());
}