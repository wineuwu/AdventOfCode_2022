import {  sumOfCals,  sumOfFirstThree } from '/day1/calorieCounting'
import getScore  from '/day2/setGame'
import data from './day3/data'

 // day1
  // let findSumOfMax = Math.max(...sumOfCals());
  // let total = sumOfFirstThree().reduce((a, c)=> a+c);

  // console.log('total',total)
  // console.log('findSumOfMax', findSumOfMax)

// day2 
// getScore()

// day3 

let scoreList = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const smaple = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

let sum = 0;

let a = data.split('\n').map(i=>{
  let first = i.substring(0, (i.length/2));
  let second = i.substring(i.length/2, i.length);
  let characters = [...first].filter(i => second.includes(i))[0];
  return scoreList.indexOf(characters)+1
  // return characters
})

sum = a.reduce((a, c)=> a+c,0);

// day3 part 2

let sentence =`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

let list = data.split('\n')

const n = 3;

let sums = list.length/n; 
let total = 0 ;

for(let i = sums; i > 0; i--) {
    let last =  ((i-1)*n)-(list.length) ;   
    // 三個為一組
    let item = list.slice((Math.abs(last)-n), Math.abs(last));
    // 跑每一個String 移除重複的字母
    let a = item.map((i, idx) => {
      if(idx !== 0){
        let str = [...i].filter(i => item[0].includes(i));
        return [...new Set(str)]
      }
    }).slice(1,3);   
    let char = a[0].filter(i => a[1].includes(i));
    total += scoreList.indexOf(char[0])+1    
}










