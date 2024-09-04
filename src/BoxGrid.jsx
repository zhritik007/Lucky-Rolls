import Box from "./Box";
import { useState } from "react";

export default function BoxGrid(){
    const [boxes,setBoxes]=useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false]);

    function reset(){
        setBoxes([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false])
    }

    function toggleBox(idx){
        setBoxes((oldBoxes)=>{
            return oldBoxes.map((value,i)=>{
                if(i===idx){
                    return !value;
                }else{
                    return value;
                }
            });
        })
        
    }
    return(
        <div className="BoxGrid">
            {boxes.map((b,idx)=>(<Box key={idx} isActive={b} toggle={()=>toggleBox(idx)}/>))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}