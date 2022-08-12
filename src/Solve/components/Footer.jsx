import React from 'react';
export default function Footer() {
  return (
    <footer>
      <a href="#" className="bQ">
        <img src="img/leftarrow.svg" className="l_arrow" />
        이전 문제
      </a>
      <a href="#" className="nQ">
        <img src="img/nowing.svg" className="idk" />
        풀이 현황
      </a>
      <a href="#" className="aQ">
        다음 문제
        <img src="img/rightarrow.svg" className="r_arrow" />
      </a>
    </footer>
  );
}
