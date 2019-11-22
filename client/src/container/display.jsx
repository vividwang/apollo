import React from 'react';
import './style.scss';

class Display extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      capitals: []
    };
    this.mapContainer = React.createRef();
    this.map = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    setInterval(() => {
      this.setState({
        capitals: [{
          center: [105 + parseFloat((Math.random()* 5).toFixed(4)), 35 + parseFloat((Math.random()* 5).toFixed(4))]
        }]
      });
    }, 2500);
  }

  componentDidMount() {
    this.map = new window.AMap.Map(this.mapContainer.current, {
      pitch: 75,
      resizeEnable: true,
      center: [106.397428, 36.90923],
      zoom: 5,
      expandZoomRange: true,
      Zooms: [3, 20],
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let markerContent = `<div class="marker">
      用户：A
    </div>`;
    let marker = [];
    for(let i=0;i<this.state.capitals.length;i+=1){
      let center = this.state.capitals[i].center;
      let circleMarker = new window.AMap.Marker({
        position:center,
        content: markerContent,
      });
      circleMarker.setMap(this.map);
      marker.push(circleMarker);
    }
    
    setTimeout(() => {
      this.map.remove(marker)
    }, 3000);
  }

  render() {
    return <div className="display">
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
            width: 90%;
            height: 500px;
            margin: 50px auto;
          }
          .btn {
            margin: 0 200px;
            width: 100px;
            height: 50px;
          }
          .marker {
            width: 70px;
            height: 70px;
            font-size: 14px;
            border-radius: 35px;
            line-height: 70px;
            text-align: center;
            background-color: #42a5f5;
            color: white;
            box-shadow: 1px 1px 1px #ccc;
          }
        `}
      </style>
    </div>
  }
}

export default Display;
