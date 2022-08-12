import Answer from "./components/Answer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Question from "./components/Question";
import "./styles.css";
import React from 'react';

export default function Solving() {
  return (
    <div className="solved">
      <Header />
      <Question />
      <Answer />
      <Footer/>
    </div>
  );
}
