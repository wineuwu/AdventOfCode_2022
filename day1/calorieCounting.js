import data from './data'

const setElfsGroup = (elfs) => {
  return elfs.split('\n\n').map(i => i.replaceAll('\n', ' ').split(' ').map(Number))
}

const calorieCounter = () => { 
  const list = setElfsGroup(data);
  let cals = list.map(i => i.reduce((a, c) => a+c))
  console.log(Math.max(...cals))
}

export default calorieCounter ;