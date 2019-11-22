import React from 'react';

function NavItem(props) {
  return <>
    <div className="nav-item">
      {props.title}
    </div>
  </>
}

export default NavItem;