import React from 'react';

function Card(props) {
  return <>
    <div className="display-card" style={props.style}>
      {props.children}
    </div>
    <style>
      {`
        .display-card {
          z-index: 1000;
          background-color: transparent;
          color: #1aff5e;
          padding: 12px;
          border-radius: 3px;
          border: solid 2px #ccc;
          box-shadow:
            1px 1px 1px rgba(200, 200, 200, 0.6),
            2px 2px 2px rgba(200, 200, 200, 0.3),
            4px 4px 4px rgba(200, 200, 200, 0.3),
            6px 6px 6px rgba(220, 220, 220, 0.2),
            -2px 0 3px rgba(200, 200, 200, 0.6),
            -6px 6px 6px rgba(220, 220, 220, 0.2);
        }
      `}
    </style>
  </>
}

export default Card;