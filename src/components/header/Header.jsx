import React from 'react';
import './header.css';
import TabButton from "./TabButton";

export default function Header() {
  function reloadPage(){
      window.location.href = 'index.html';
  }
  return <nav className="header-container">
      <div className="logo" onClick={reloadPage}></div>
      <menu>
          <TabButton id='hero'>Home</TabButton>
          <TabButton id='cards'>Protfolio</TabButton>
          <TabButton id='contactform'>Contact</TabButton>
      </menu>
  </nav>;
}
