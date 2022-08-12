import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import Header2 from './Header/Header2';
import Gongji from './Gongji/Gongji';
import List from './List/List';
function Gongjim() {
  return (
    <div>
      <Header2 />
      <Gongji />
      <List />
      <Footer/>
    </div>
  );
}

export default Gongjim;
