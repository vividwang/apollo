import React from 'react';
import NavItem from "./nav_item.jsx";

function Navbar(props) {
  return <>
    <div className="menu-container">
      <div className="menu-item brand">
        <a href="#">
          <img src="../../public/img/logo.png"/>
        </a>
      </div>
      <div className="menu-item dropdown">
        <NavItem title="Index"/>
      </div>
      <div className="menu-item dropdown">
        <NavItem title="Docs"/>
      </div>
      <div className="menu-item dropdown">
        <NavItem title="Pages"/>
      </div>
      <div className="menu-item dropdown">
        <NavItem title="Layout"/>
      </div>
    </div>
    <style>
      {`
        .menu-container {
          position: fixed;
          top: 0;
          width: 100%;
          height: 60px;
          box-shadow: 0 0 1px rgba(57, 70, 78, .15), 0 7px 12px -5px rgba(57, 70, 78, .25);
          display: grid;
          grid-template-columns: 140px 120px 60px 80px 120px 1fr;
          grid-template-row: 60px;
          background-color: white;
          z-index: 100;
        }
        
        .menu-item {
          text-align: center;
          font-size: 14px;
          line-height: 60px;
          font-family: "Raleway", sans-serif;
        }

        .menu-item a {
          color: grey;
          text-decoration: none;
        }
        
        .brand {
          animation: 1.5s ease-out 0s 1 forwards logo-in;
        }

        @keyframes logo-in {
          from {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
          to {
            width: 100%;
            height: auto;
            opacity: 1;
          }
        }

        .brand img {
          width: 60%;
          height: 50px;
          margin: 5px auto auto auto;
        }
    `}
    </style>
  </>
}

export default Navbar;