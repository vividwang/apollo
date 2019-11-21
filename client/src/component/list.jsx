import React from 'react';

function Item(props) {
  return <>
    <div className="img-container">
      <img src={props.imgSrc} alt="img"/>
    </div>
    <div className="info-container">
      <span>{ props.name }</span><span style={{ color: 'red' }}>{ props.price }</span><br />
      <span>+</span><span>{props.count}</span><span>-</span>
    </div>
  </>
}

function List(props) {
  let items = props.map((v, i) => {
    return <div key={v.name}>
      <Item
      />
    </div>
  });
  return <>

  </>
}

export default List;