import Gongjiyo from './Gongji/Gongji';
import Listing from './List/List';
import Texting from './List/Texting';
import React from 'react';
import Header2 from '../Header/Header2';
import Footer from '../Footer/Footer';
export default function Jingong() {
    return(
        <div>
            <Header2 />
            <Gongjiyo/>
            <Listing/>
            <Texting/>
            <Footer/>
        </div>
    )
}