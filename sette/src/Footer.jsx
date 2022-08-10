import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { GrDocumentText } from 'react-icons/gr';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
export default function Footer() {
    return (
        <div className='container'>
            <Link to="/"><VscHome className='homeicon' size='55'/></Link>
            <GrDocumentText className='problem' size='45'/>
            <Link to="/solve"><HiOutlinePencilAlt className='odap' size='48'/></Link>
            <Link to="/account"><VscAccount className='user' size='45'/></Link>
        </div>
    )
}
