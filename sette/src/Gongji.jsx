import React, {useState} from 'react';
import './Gongji.css'
import { HiSpeakerphone } from "react-icons/hi";
import { ReactComponent as Gong } from "./Vector.svg";
export default function Gongji() {
    return(
        <div>
            <Gong className='Gongjis' />
            <p className='Gtext'>공지사항</p>
        </div>
    )
}