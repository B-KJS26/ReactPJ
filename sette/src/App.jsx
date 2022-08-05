import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { GrDocumentText } from 'react-icons/gr';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import Loging from './Login/Loginscreen';
import Maining from './Mainpage/Mainpage';
import Solving from './Solve/Solve';
export default function App() {
  return (
    <div className='container'>
      <Router>
        <main>
          <Route exact path="/" element={Loging} />
          <Route path="/main" component={Maining}/>
          <Route path="/solve" component={Solving}/>
        </main>
        <footer>
          <Link to="/">
            <VscAccount className='user' size='45' />
          </Link>
          <Link to="/main">
            <VscHome className='homeicon' size='55' />
          </Link>
          <Link to="/solve">
            <GrDocumentText className='problem' size='45' />
          </Link>
          <Link to="/resolve">
            <HiOutlinePencilAlt className='odap' size='48' />
          </Link>
        </footer>
      </Router>
    </div>
  )
}
