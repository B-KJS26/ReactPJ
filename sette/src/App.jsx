import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { GrDocumentText } from 'react-icons/gr';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import Loging from './Loginscreen';
import Maining from './Mainpage/Mainpage';
import Solving from './Solve/Solve';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Loging />} />
          <Route path="/main" element={<Maining />} />
          <Route path="/solve" component={<Solving />} />
        </Routes>
      </Router>
        <div className='container'>
        <VscHome className='homeicon' size='45' />
        <VscAccount className='user' size='40' />
        <GrDocumentText className='problem' size='36' />
        <HiOutlinePencilAlt className='odap' size='48' />
        </div>
    </div>
  )
}
