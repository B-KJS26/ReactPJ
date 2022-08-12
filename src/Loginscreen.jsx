import LoginBtn from './Login/LoginBtn/index'
import LoginHeader from './Login/LoginHeader/index'
import React from 'react';
import './Loginscreen';
import Footer from './Footer/Footer'
export default function Loginscreen() {
    return(
        <div>
            <LoginHeader/>
            <LoginBtn/>
            <Footer/>
        </div>
    )
}