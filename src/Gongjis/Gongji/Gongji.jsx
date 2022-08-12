import React, {useState} from 'react';
import './Gongji.css'
import { HiSpeakerphone } from "react-icons/hi";
export default function Gongji() {
    return(
        <div>
            <HiSpeakerphone className='Gongjied' />
            <p className='Gtext'>공지사항</p>
        </div>
    )
}