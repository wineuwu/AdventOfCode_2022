import {  sumOfCals,  sumOfFirstThree } from '/day1/calorieCounting'

 // day1
  let findSumOfMax = Math.max(...sumOfCals());
  let total = sumOfFirstThree().reduce((a, c)=> a+c);

  console.log('total',total)
  console.log('findSumOfMax', findSumOfMax)







