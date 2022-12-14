import data from './data'

export default ()=>{
  // part 1
  let scoreList = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const smaple = `vJrwpWtwJgWrhcsFMMfFFhFp
  jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
  PmmdzqPrVvPwwTWBwg
  wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
  ttgJtRGJQctTZtZT
  CrZsJsPPZsGzwwsLwLmpwMDw`

  let sum = 0;

  data.split('\n').map(i=>{
    let first = i.substring(0, [(i.length/2)]);
    let second = i.substring([(i.length/2)], i.length);
    let characters = [...first].filter(i => second.includes(i))[0];
    sum += (scoreList.indexOf(characters)+1);
  })

  console.log('part 1: ', sum);

  // part 2

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
      // 2比對1 找出一樣的字母
      let char= [...item[2]].filter(i => item[0].includes(i) && item[1].includes(i))
      total += scoreList.indexOf(char[0])+1
  }

  console.log('part 2: ' ,total);
}