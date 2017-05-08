const product = (x)=>{
    return y => {
        return y * x;
    }
}
console.log("hi 安安");
/* 更短的寫法
const product = (x)=>{
    return y => return y * x;
   }
   再更短的寫法
   const product = x => y => y * x;
*/
let mult5 = product(5);
console.log(mult5(3));//輸出15
let double = product(2);
console.log(double(9));//輸出18

