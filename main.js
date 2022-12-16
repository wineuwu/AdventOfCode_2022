import Day1 from '/day1/calorieCounting'
import Day2  from '/day2/setGame'
import Day3 from './day3/example'
import data from './day4/data'

// Day1();
// Day2();
// Day3();


// day 4
let sample =`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`


let digitList = data.split('\n');

const getStringNum =(item)=> {
  let numList = [];

  for(let i = item[0] ; i <= item[1]; i++){
    // numList[i-1] = i;
    // console.log(i)
     numList.push(i)
  }  
  // console.log(numList)
  return numList;
}

let sum = 0;
digitList.map(i => {
  let range = i.split(','); 
  let first = getStringNum(range[0].split('-').map(Number));

  let sec =  getStringNum(range[1].split('-').map(Number));
  
  if(first.length > sec.length){
    let isMatch= !sec.map(i=> first.includes(i)).includes(false)
    sum += +isMatch 
  } else {
    let isMatch= !first.map(i=> sec.includes(i)).includes(false)
    sum += +isMatch 
  }
})

console.log(sum)







