import data from './data';

let sample = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

// set elfs group of cal
const setElfsGroup = (elfs) => {
  return elfs.split('\n\n').map(i => i.replaceAll('\n', ' ').split(' ').map(Number))
}

// find sum of max
const sumOfCals = () => { 
  const list = setElfsGroup(data);
  let cals = list.map(i => i.reduce((a, c) => a+c)) 
  return cals
}

let sumOfFirstThree = () => {
  return sumOfCals().sort((a,b)=>b-a).slice(0,3);
}


export {
  sumOfCals ,
  sumOfFirstThree 
};

