import React from 'react';
import io from 'socket.io-client';
import './style.scss';
import Navbar from "../component/navbar.jsx";
import Card from "../component/card.jsx";
import TimeDisplay from "../component/time_display.jsx";

const socket = io('ws://localhost:5000');

class Display extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      capitals: [],
      time: '',
    };
    this.mapContainer = React.createRef();
    this.map = {};
  }


  componentDidMount() {
    this.mapContainer.current.style.height = window.innerHeight;
    this.map = new window.AMap.Map(this.mapContainer.current, {
      pitch: 75,
      resizeEnable: true,
      center: [114.397428, 30.90923],
      zoom: 10,
      expandZoomRange: false,
      Zooms: [10, 20],
    });

    socket.emit('init');
    socket.on('push', data => {
      console.log('data', data);
      this.setState({
        capitals: [data]
      })
    });

    var styleName = "amap://styles/" + 'darkblue';

    this.map.setMapStyle(styleName);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let markerContent = `<div class="marker">
      <div class="inner-circle"></div>
      <div class="outer-circle"></div>
      <div class="content">
        <img src=${this.state.capitals[0].avatar} alt="img"/>
      </div>
      <div class="arrow"></div>
<!--      <div class="arrow-color"></div>-->
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
    }, 4000);
  }

  render() {
    return <div style={{
      position: 'relative'
    }}>
      {/*<Navbar/>*/}
      <div className="show_data">
        消费总额：100，000，000
      </div>
      <Card style={{
        position: 'absolute',
        top: '120px',
        left: '25px',
        width: '220px',
        lineHeight: '22px',
        textAlign: 'center'
      }}>
        <p>订单总数： 12000</p>
        <p>当前在线人数： 120</p>
        <p>当前在线人数： 120</p>
      </Card>
      <Card style={{
        position: 'absolute',
        top: '290px',
        left: '25px',
        width: '220px',
        lineHeight: '22px',
        textAlign: 'center'
      }}>
        <div>
          用户量： 1200000
        </div>
      </Card>
      <Card style={{
        position: 'absolute',
        top: '350px',
        left: '25px',
        width: '220px',
        lineHeight: '22px',
        textAlign: 'center'
      }}>
        <div>
          用户增长： 6
        </div>
      </Card>
      <Card style={{
        position: 'absolute',
        top: '120px',
        right: '25px',
        width: '220px',
        lineHeight: '22px',
        textAlign: 'center'
      }}>
        <div>
          <TimeDisplay/>
        </div>
      </Card>
      <Card style={{
        position: 'absolute',
        top: '200px',
        right: '25px',
        width: '220px',
        lineHeight: '22px',
        textAlign: 'center'
      }}>
        <div>
          当前在线人数： 120
        </div>
      </Card>
      <div className="display">
        <div
          className="map-container"
          ref={this.mapContainer}>
        </div>
      </div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background-color: black;
          }
          .display {
            display: grid;
            grid-template-columns: 1fr;
          }
          .show_data {
            position: absolute;
            top: 120px;
            left: 40%;
            width: 20%;
            height: 80px;
            z-index: 1000;
            padding: 20px;
            line-height: 80px;
            font-size: 28px;
            text-align: center;
            border-radius: 3px;
            color: white;
            background-color: transparent;
            border: solid 1px #ccc;
          }
          .map-container {
            width: 100%;
            height: 1000px;
            margin: 0 auto;
          }
          .marker {
            position: relative;
            width: 50px;
            height: 50px;
            font-size: 12px;
            border-radius: 25px;
            text-align: center;
            color: white;
          }
          .inner-circle {
            position: absolute;
            top: 25px;
            left: 25px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background-color: orange;
            animation: 2.5s ease-out 0.5s 1 both scale;
          }
          @keyframes scale {
            from {
              top: 25px;
              left: 25px;
              width: 0;
              height: 0;
              opacity: 0.8;
            }
            to {
              top: -30px;
              left: -30px;
              width: 110px;
              height: 110px;
              opacity: 0;
            }
          }
           .outer-circle {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #ff8000;
            animation: 2s ease-out 0.5s 1 both scale2;
          }
          @keyframes scale2 {
            from {
              top: 10px;
              left: 10px;
              width: 30px;
              height: 30px;
              opacity: 0.7;
            }
            to {
              top: -30px;
              left: -30px;
              width: 110px;
              height: 110px;
              opacity: 0;
            }
          }
          .content {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 0;
            left: 0;
            border-radius: 25px;
            background-color: white;
          }
          
          .content img {
            width: 40px;
            height: 40px;
            margin-top: 5px;
            border-radius: 20px;
          }
          
          .arrow {
            position: absolute;
            top: 45px;
            left: 11px;
            width: 0;
            height: 0;
            border-left: solid 14px transparent;
            border-right: solid 14px transparent;
            border-top: solid 19px white;
          }
          
          /*.arrow-color {
            position: absolute;
            top: 46px;
            left: 12px;
            width: 0;
            height: 0;
            border-left: solid 13px transparent;
            border-right: solid 13px transparent;
            border-top: solid 16px white;
          }*/
        `}
      </style>
    </div>
  }
}

export default Display;
