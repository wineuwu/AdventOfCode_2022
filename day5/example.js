import data from './data'

//day 5 part 1

let targets = [
  ['Z', 'N'],
  ['M', 'C', 'D'],
  ['P']
]

let rules = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`


let part1 = ()=>{
  data.rules.split('\n').map(i => {
    let [times, from, to] = i.match(/(\d+)/g).map(Number);
    for(let i = times ; i > 0 ; i--){
      let crat = data.targets[from-1].pop();
      data.targets[to-1].push(crat);   
    }
  })
  
  let str = data.targets.map(s => s[s.length - 1]).join('')
  console.log(str);
}

let part2 = () => { 
  data.rules.split('\n').map(i => {
    let [times, from, to] = i.match(/(\d+)/g).map(Number);
    let sta = data.targets[from-1].splice(-times);
    data.targets[to-1] = data.targets[to-1].concat(sta)
  })

  let str = data.targets.map(s => s[s.length - 1]).join('')
  console.log(str);
} 
export default {
  part1,
  part2
}



