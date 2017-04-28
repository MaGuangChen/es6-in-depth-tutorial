//定義新的class
class Animal {
    constructor(name,height){
        this.name = name;
        this.height = height;
    }
    //新的在object內宣告method的方法
    hello(){
        console.log(`Hi! I'm ${this.name} from the Animal kingdom`)
    }
}
export default Animal;