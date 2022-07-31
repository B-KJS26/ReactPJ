import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Header2 from './Header2';
import Gongji from './Gongji';
import List from './List';
function App() {
  return (
    <div>
      <Header2 />
      <Gongji />
      <List />
      <Footer/>
    </div>
  );
}

export default App;
