import data from './data'

//day 5 part 1

export default ()=>{
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



