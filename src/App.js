import React from "react";
import "./style.css";

export default function App() {
  return (
    <>
      <div />
           <div class="container">
        <div class="login">
            <span>Sohbete bağlanmak için isminizi giriniz</span>
            <input type="text" id="myName" placeholder="İsim Giriniz" autocomplete="off">
            <button onclick="sohbeteBasla();"><i class="fa fa-comment"></i> Sohbete Başla</button>
        </div>
        </div>
    </>
  
  );
}
