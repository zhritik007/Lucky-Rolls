import { useState } from "react"
import { getRolls } from "./utils"
import Dice from "./Dice";
import Button from "./Button";
import Box from "./Box";
export default function LuckyN({title="Dice Game",numDice=2,winCheck}){
    console.log("Re-rendered");
    const [dice,setDice]=useState(getRolls(numDice));
    const isWinner=winCheck(dice);
    const roll=()=>setDice(getRolls(numDice))
    return(
        <main className="LuckyN">
            <h1>{title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice}/>
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button clickFunc={roll} label="Re-Roll"/>
            
        </main>
    )
}