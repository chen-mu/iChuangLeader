import Taro from "@tarojs/taro"
import * as echarts from '@components/ec-canvas/echarts'

import BaseComponent from '@components/base'
import { COLOR_TEXT_SECONDARY } from '@constants/styles'

export default class ChartLine extends BaseComponent {
  config = {
    usingComponents: {
      "ec-canvas": "../ec-canvas/ec-canvas"
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    ec: {
      lazyLoad: true,
      disableTouch: false,
    }
  }

  refresh(option) {
    this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, 'light', {
        width: width,
        height: height
      });
      this.setChartData(chart, option);
      return chart;
    });
  }

  setChartData(chart, { xAxis, series }) {
    let option = {
      color: ['#255BFF'],
      xAxis: {
        type: 'category',
        boundaryGap: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { textStyle: { fontSize: '10', color: COLOR_TEXT_SECONDARY } },
        data: xAxis
      },
      yAxis: {
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { textStyle: { fontSize: '10', color: COLOR_TEXT_SECONDARY } },
      },
      series: [{
        type: 'line',
        areaStyle: { normal: { color: '#C2D1FF' } },
        data: series
      }],
      grid: { left: '0', right: '10', bottom: '0', top: '10', containLabel: true },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 0,
          end: 50
        },
        {
          type: 'inside',
          realtime: true,
          start: 0,
          end: 50
        }
      ]
    };

    chart.setOption(option)
  }

  refChart = node => (this.Chart = node);

  render() {
    return (
      <ec-canvas
        ref={this.refChart}
        ec={this.state.ec}
        canvas-id='mychart-area'
      />
    );
  }
}
