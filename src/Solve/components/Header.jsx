import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header>
        <Link to='/' className='beforebtn'>
          <img src='img/Vector.svg'></img>
        </Link>
      <p className="title">지수와 로그 (3)</p>
      <button className="submit_btn">채점하기</button>
    </header>
  );
}
