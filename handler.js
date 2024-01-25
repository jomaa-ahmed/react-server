const Amthal = require("./data/index.json")

const randomMathal = ()=>{
  return Amthal[Math.floor(Math.random() * Amthal.length)]
}

const randomTen = () => {
    let randomList = new Set();

    while(randomList<10){
       let random =  Math.floor(Math.random() * Amthal.length);
       if (randomList.has(random)){
        randomList.add(random);
       }
    }

    // set to array
    let array = [...randomList];
    let output = [];
    for ( let i in array){
        output.push(Amthal[array[i]]);
    }
    return output;
}

module.exports= {randomTen,randomMathal}