import "./index.css";
import React from 'react';
export default function LoginBtn() {
  return (
    <div>
    <a href="https://bssm.kro.kr/oauth/login?clientId=63184a2a&redirectURI=http://15.164.232.147:8888/oauth">
      <button className="logging">로그인 하러 가기</button>
    </a>
    </div>
  );
}
