import React from 'react';
import Charts from "./charts";

class Chart extends React.Component{
  constructor(props) {
    super(props);

    this.myChart = React.createRef();
    this.myChart2 = React.createRef();
    this.myChart3 = React.createRef();
    this.myChart4 = React.createRef();
  }
  componentDidMount() {
    const config = {
      title: 'Chart title', // chart title,
      xType: null,
      yType: null,
      xData: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
      data: [5, 20, 22, 10, 10, 20],
      sName: '销量'
    };

    const config2 = {
      title: 'Chart title',
      xType: 'category',
      yType: 'value',
      xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      sName: '销量'
    };

    const config3 = {
      title: 'Chart title',
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      chartColor: 'orange',
      textColor: '',
      lineColor: '',
      sType: 'pie',
      data:[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:274, name:'联盟广告'},
        {value:235, name:'视频广告'},
        {value:400, name:'搜索引擎'}
      ],
    };

    const config4 = {
      title: 'guage',
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      sName: '业务指标',
      detail: {formatter:'{value}%'},
      data: [{value: 50, name: '完成率'}]
    };

    new Charts('histogram', this.myChart.current, config).init();
    new Charts('line', this.myChart2.current, config2).init();
    new Charts('pie', this.myChart3.current, config3).init();
    new Charts('gauge', this.myChart4.current, config4).init();
  }

  render() {
    return <>
      <div
        className="chart-container"
        ref={this.myChart}
      ></div>
      <div
        className="chart-container"
        ref={this.myChart2}
      ></div>
      <div
        className="chart-container"
        ref={this.myChart3}
      ></div>
      <div
        className="chart-container"
        ref={this.myChart4}
      ></div>
      <style>
        {`
          .chart-container {
            width: 90%;
            height: 90%;
            min-height: 300px;
            margin: auto;
          }
        `}
      </style>
    </>
  }
}

export default Chart;
