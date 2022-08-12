import "./index.css";
import React from "react";
import Footer from "../Footer/Footer";
import Headers from "../Header/Header";
import { HiSpeakerphone } from "react-icons/hi";
import { Link } from 'react-router-dom';
export default function MainPage() {
  return (
    <div>
      <Headers/>
    <div className="MainLayout">
      <div className="AncM">
        <HiSpeakerphone className="AncSp"/>
        <Link to='/gongjis' style={{ color: 'inherit', textDecoration: 'inherit'}}><p className="AncM1">공지사항</p></Link>
        <img src='img/new.svg' className="AncI"></img>
        <p className="AncM2">2022-07-09</p>
        <p className="AncM3">[중요공지] 새로운 기능이 추가 되었습니다.</p>
      </div>
      <div className="scripts">
        <h4>새로 올라온 학습지 |</h4>{" "}
        <p className="newWorkScripts">해결하지 않은 학습지</p>
        <h4 className="secondpart">최근 0주간 푼 문제</h4>
      </div>
      <div className="NewWork">
        <div className="NewWork1">
          <h2>수학문제 1</h2>
        </div>
        <div className="NewWork2">
          <h2>수학문제 2</h2>
        </div>
      </div>
      <div className="Chart">
        <img className='sibalj'src="img/graph.png" alt="graph"></img>
      </div>
      <div className="SolvedPScripts">
        <h4>이번주 푼 문제</h4>
      </div>
      <div className="SolvedP">
        <div className="Solved1">
          <div className="problemse">
            <p className="proh3">문제 수</p>
            <div className="leftp">
                <h2 className="num4">46</h2>
                <p className="realp">문제</p>
            </div>
          </div>
          <div className="answerp">
          <p className="answer4">정답률</p>
            <div className="rightp">
              <h2 className="num5">80</h2>
              <p className="sp">%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
