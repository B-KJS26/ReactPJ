
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Loging from './Loginscreen';
import Maining from './Mainpage/Mainpage';
import Solving from './Solve/Solve';
import Jingong from './Gongjis/Jingong';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/account"  element={<Loging />} />
          <Route path="/" element={<Maining />} />
          <Route path="/solve" element={<Solving />} />
          <Route path="/gongjis" element={<Jingong />} />
        </Routes>
      </Router>
    </div>
  )
}
