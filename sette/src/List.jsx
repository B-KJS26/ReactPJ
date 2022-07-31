import React, {useState} from "react";
import { ReactComponent as Bar } from "./Line 2.svg";
import './List.css'
export default function List() {
    let now = new Date();
    let Month = now.getMonth() + 1;
    if(Month < 10){
        Month = `0${Month}`;
    }
    let Day = now.getDate();
    return(
        <div>
            <Bar className='bars'/>
            <p>{Month}</p>
        </div>
    )
}