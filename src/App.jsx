import { useState } from 'react'
import './App.css'
import Die from './Die'
import Dice from './Dice'
import LuckyN from './LuckyN'
import { sum } from './utils'
import Box from './Box'
import BoxGrid from './BoxGrid'

function lessThan4(dice){
  return sum(dice)<4;      //Game 1 = Pass this function in LuckyN for winning codn = dice Sum< 4
}

function allSameValues(dice){
  return dice.every(v =>v === dice[0]);  //Game 2 = Pass this function in LuckyN for winning codn= each dice same number
}



function App() {
  return (
  <>
    <LuckyN  title="Roll The Same Number" winCheck={allSameValues}/>
    <LuckyN  title="Roll less than 4" winCheck={lessThan4}/>
    
    </>
  )
}

export default App
