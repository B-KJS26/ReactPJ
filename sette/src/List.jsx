import React, {useState} from "react";
import { ReactComponent as Bar } from "./Line 2.svg";
import './List.css'
import Texting from "./Texting";
export default function List() {
    //날짜 구하기 위해 필요한 변수
    let now = new Date();
    //요일
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let dayOfWeek = week[now.getDay()];
    //월
    let Month = now.getMonth() + 1;
    if(Month < 10){
        Month = `0${Month}`;
    }
    //일
    let Day = now.getDate();
    if(Day < 10){
        Day = `0${Day}`;
    }

    

    return(
        <div>
            <Bar className='bars'/>
            <p className="today">{Month} / {Day} ({dayOfWeek})</p>
            <Texting/>
        </div>
    )
}