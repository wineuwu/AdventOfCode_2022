import data from './data'

// day 4 part 1 & part 2
let sample =`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

let sample2 =`5-7,7-9 
2-8,3-7 
6-6,4-6 
2-6,4-8`

let digitList = data.split('\n');

const getNum =(item)=> {
  let numList = [];
  let str = ''
  for(let i = item[0] ; i <= item[1]; i++){
     str += i;
     numList.push(i);
  }  

  return numList;
}


export default ()=> {

  let sum = 0;
  digitList.map(i => {

    let range = i.split(','); 
    let first = getNum(range[0].split('-').map(Number));
    let sec =  getNum(range[1].split('-').map(Number));
    if(first.length > sec.length){
      let isMatch= sec.map(i=> first.includes(i)).includes(true)
      sum += +isMatch;
    } else {
      let isMatch= first.map(i=> sec.includes(i)).includes(true)
      sum += +isMatch 
    }
  })

  console.log(sum)

};