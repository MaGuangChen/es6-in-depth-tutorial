function cheer(){
    console.log("woohoo");
};
cheer();

{
    var cheer = function(){
    console.log("woohoo");
    };
cheer();
}

{
    setTimeout(()=>{
        console.log("woohoo!");
    },3000);
}

{
    let cheer = () =>{
        console.log("woohoo!");
    }
cheer();
}

let values = [20,30,40];
let double = (n) => {
    return n*2;
};
let doubled = values.map(double);
console.log(doubled);

{
  //簡短的
  let values = [20,30,40];

  let doubled = values.map((n) =>{
      return n*2;
  });
   console.log(doubled);  
}
{
    //更簡短的，因為es6知道你要塞function了
    let values = [20,30,40];
    let doubled = values.map((n) => n*2);
    console.log(doubled);
}

//filter array
let points = [7,16.21,4,3,22,5];
let hightScores = points.filter(
    (n) => n > 15
    )
console.log(hightScores);

//new method in es6
let b = "wooh" + "oo".repeat(50);
console.log(b);
{
    let b =`woo${"oo".repeat(50)}`;
    console.log(b);
}

