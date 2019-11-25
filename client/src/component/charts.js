// 直方图
class Histogram {
  constructor(cInstance, config) {
    this.cInstance = cInstance;
    this.config = config;
  }
  init() {
    const options = {
      title: {
        text: this.config.title
      },
      tooltip: this.config.tooltip ? this.config.tooltip : {},
      legend: this.config.legend ? this.config.legend : {},
      xAxis: {
        data: this.config.xData
      },
      yAxis: {},
      series: [{
        name: this.config.sName,
        type: 'bar',
        data: this.config.data
      }]
    };
    this.cInstance.setOption(options);
  }
}

// 折线图
class Line {
  constructor(cInstance, config) {
    this.cInstance = cInstance;
    this.config = config;
  }

  init() {
    const options = {
      title: {
        text: this.config.title
      },
      tooltip: this.config.tooltip ? this.config.tooltip : {},
      legend: this.config.legend ? this.config.legend : {},
      xAxis: {
        type: this.config.xType,
        data: this.config.xData
      },
      yAxis: {
        type: this.config.yType,
      },
      series: [{
        name: this.config.sName,
        type: 'line',
        data: this.config.data
      }]
    };
    this.cInstance.setOption(options);
  }
}

// 饼图
class Pie {
  constructor(cInstance, config) {
    this.cInstance = cInstance;
    this.config = config;
  }

  init() {
    const options = {
      backgroundColor: this.config.backgroundColor ? this.config.backgroundColor : 'white',
      title: {
        text: this.config.title,
        left: this.config.positionLeft ? this.config.positionLeft : 'center',
        top: this.config.positionTop ? this.config.positionTop : 0,
      },
      tooltip: this.config.tooltip ? this.config.tooltip : {},
      legend: this.config.legend ? this.config.legend : {},
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [{
        name: this.config.sName,
        type: 'pie',
        data: this.config.data.sort(function (a, b) { return a.value - b.value; })
      }],
      roseType: 'radius',
      label: {
        normal: {
          textStyle: {
            color: this.config.textColor ? this.config.textColor : 'rgba(255, 255, 255, 0.3)',
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: this.config.lineColor ? this.config.lineColor :'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        }
      },
      itemStyle: {
        normal: {
          color: this.config.chartColor ? this.config.chartColor :'#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    };
    this.cInstance.setOption(options);
  }
}

class Guage {
  constructor(cInstance, config) {
    console.log('cInstance', cInstance);
    this.cInstance = cInstance;
    this.config = config;
  }

  init() {
    const options = {
      tooltip : this.config.tooltip,
      toolbox: this.config.toolbox ? this.config.toolbox : {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: this.config.detail,
          data: this.config.data
        }
      ]
    };

    this.cInstance.setOption(options);
  }
}

class Charts {
  constructor(type, container, config) {
    this.chartType = type;
    this.container = container;
    this.config = config;
  }

  init() {
    const instance = echarts.init(this.container);

    switch (this.chartType) {
      case 'histogram':
        return new Histogram(instance, this.config).init();
      case 'line':
        return new Line(instance, this.config).init();
      case 'pie':
        return new Pie(instance, this.config).init();
      case 'gauge':
        return new Guage(instance, this.config).init();
      default:
        return ''
    }
  }
}

export default Charts;
