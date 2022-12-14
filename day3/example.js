import data from './data'

// setting sortList

let scoreList = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const smaple = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

let sum = 0;

const filterSentence = (d) => {
  d.split('\n').map(i => {
    let firstSentence = i.substring(0, )
  })
}
data.split('\n').map(i=>{
  let first = i.substring(0, [(i.length/2)]);
  let second = i.substring([(i.length/2)], i.length);
  let characters = [...first].filter(i => second.includes(i))[0];
  sum += (scoreList.indexOf(characters)+1);
})
