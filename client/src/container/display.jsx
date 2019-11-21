import React from 'react';
import './style.scss';

class Display extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      flags: [],
    };
    this.mapContainer = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  componentDidMount() {
    let map = new window.AMap.Map(this.mapContainer.current, {
      pitch: 75,
      resizeEnable: true,
      center: [106.397428, 36.90923],
      zoom: 5,
      expandZoomRange: true,
      Zooms: [3, 20],
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    return <>
      <div
        className="map-container"
        ref={this.mapContainer}>
      </div>
      <button
        className="btn"
        onClick={this.handleClick}
      >Click</button>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          .map-container {
            width: 98%;
            height: 800px;
            margin: auto;
          }
        `}
      </style>
    </>
  }
}

export default Display;