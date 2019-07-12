import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/heatmap'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/extension/bmap/bmap'

import Axios from '@common/Axios'
import CustomBreadcrumb from '@common/CustomBreadcrumb'
import TypingCard from '@common/TypingCard'
import styles from './index.module.less'
import { geoData, hours, days } from './data'

class index extends Component {
  render() {
    const cardContent = `<ul class="card-ul">
            <li>ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</li>
            <li>安装Echarts依赖， yarn add echarts</li>
            <li>使用echarts bmap需要在html中添加百度地图的密钥,以及在文件中引入
            import 'echarts/lib/component/visualMap'与
            import 'echarts/extension/bmap/bmap'</li>
            <li>具体使用参见<a href="https://echarts.baidu.com/" target="#">echarts官网</a></li>
        </ul>`
    return (
      <div className={styles.echartsPage}>
        <CustomBreadcrumb arr={['Echarts Demo']} />
        <TypingCard source={cardContent} id="howUse" title="使用说明" />
        <Row gutter={20}>
          <Col span={12}>
            <Card
              hoverable
              bordered={false}
              title="基础柱状图"
              style={{ minHeight: 400 }}
              id="1"
            >
              <div id="column" style={{ width: '100%', height: 400 }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              bordered={false}
              title="堆积条形图"
              style={{ minHeight: 400 }}
              id="4"
            >
              <div id="echarts4" style={{ width: '90%', height: 400 }} />
            </Card>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Card
              hoverable
              bordered={false}
              title="基础线型图"
              style={{ minHeight: 400 }}
              id="2"
            >
              <div id="line" style={{ width: '100%', height: 400 }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              bordered={false}
              title="堆积折线图"
              style={{ minHeight: 400 }}
              id="5"
            >
              <div id="echarts5" style={{ width: '90%', height: 400 }} />
            </Card>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Card
              hoverable
              bordered={false}
              title="散点图"
              style={{ minHeight: 400 }}
              id="3"
            >
              <div id="echarts3" style={{ width: '100%', height: 400 }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              bordered={false}
              title="饼状图"
              style={{ minHeight: 400 }}
              id="6"
            >
              <div id="echarts6" style={{ width: '100%', height: 400 }} />
            </Card>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Card
              hoverable
              bordered={false}
              title="笛卡尔坐标系上的热力图"
              style={{ minHeight: 400 }}
              id="7"
            >
              <div id="echarts7" style={{ width: '100%', height: 400 }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              bordered={false}
              title="热力图"
              style={{ minHeight: 400 }}
              id="8"
            >
              <div id="echarts8" style={{ width: '100%', height: 400 }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }

  componentDidMount() {
    this.initColumnEcharts()
    this.initLineEcharts()
    this.initScatter()
    this.initStack()
    this.initStackLine()
    this.initPieCharts()
    this.initHeatMap()
    this.initHeatMap2()
  }

  initColumnEcharts = () => {
    const myChart = echarts.init(document.getElementById('column'))
    myChart.setOption({
      title: {
        text: 'ECharts 柱状图示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
    myChart.resize()
  }

  initLineEcharts = () => {
    const myChart = echarts.init(document.getElementById('line'))
    myChart.setOption({
      title: {
        text: 'ECharts 线型图示例'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      tooltip: {
        trigger: 'axis'
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          name: '示例'
        }
      ]
    })
    myChart.resize()
  }

  initScatter = () => {
    const myChart = echarts.init(document.getElementById('echarts3'))
    const option = {
      title: {
        text: 'ECharts 散点图示例'
      },
      xAxis: {},
      yAxis: {},
      tooltip: {
        formatter: function(param) {
          var value = param.value
          return value[0] + '(' + value[1] + ')'
        }
      },
      series: [
        {
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
          ],
          type: 'scatter'
        }
      ]
    }
    myChart.setOption(option)
    // myChart.resize()
  }

  initStack = () => {
    const myChart = echarts.init(document.getElementById('echarts4'))
    const option = {
      title: {
        text: 'ECharts 堆积条形图示例'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      // legend: {
      //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      // },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: '直接访问',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: '搜索引擎',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
    myChart.setOption(option)
    myChart.resize()
  }

  initStackLine = () => {
    const myChart = echarts.init(document.getElementById('echarts5'))
    const option = {
      title: {
        text: 'ECharts 堆积折线图示例'
      },
      tooltip: {
        trigger: 'axis'
      },
      // legend: {
      //   data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      // },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
    myChart.setOption(option)
    myChart.resize()
  }

  initPieCharts = () => {
    const myChart = echarts.init(document.getElementById('echarts6'))
    const option = {
      // backgroundColor: '#2c343c',
      title: {
        text: 'ECharts 饼状图示例'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 274, name: '联盟广告' },
            { value: 235, name: '视频广告' },
            { value: 400, name: '搜索引擎' }
          ].sort(function(a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          }
        }
      ]
    }
    myChart.setOption(option)
    myChart.resize()
  }

  initHeatMap = () => {
    const myChart = echarts.init(document.getElementById('echarts7'))
    const data = geoData.map(function(item) {
      return [item[1], item[0], item[2] || '-']
    })

    const option = {
      title: {
        text: 'ECharts 笛卡尔坐标系上的热力图示例'
      },
      tooltip: {
        position: 'top'
      },
      animation: false,
      // grid: {
      //   height: '70%',
      //   y: '1%'
      // },
      xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
          show: true
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        splitArea: {
          show: true
        }
      },
      visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
      },
      series: [
        {
          name: 'Punch Card',
          type: 'heatmap',
          data: data,
          label: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    myChart.setOption(option)
  }

  initHeatMap2 = async () => {
    const myChart = echarts.init(document.getElementById('echarts8'))
    const res = await Axios.get('/api/heatmap.json')
    const data = res.data
    var points = [].concat.apply(
      [],
      data.map(function(track) {
        return track.map(function(seg) {
          return seg.coord.concat([1])
        })
      })
    )
    myChart.setOption({
      animation: false,
      bmap: {
        center: [120.13066322374, 30.240018034923],
        zoom: 14,
        roam: true
      },
      visualMap: {
        show: false,
        top: 'top',
        min: 0,
        max: 5,
        seriesIndex: 0,
        calculable: true,
        inRange: {
          color: ['blue', 'blue', 'green', 'yellow', 'red']
        }
      },
      series: [
        {
          type: 'heatmap',
          coordinateSystem: 'bmap',
          data: points,
          pointSize: 5,
          blurSize: 6
        }
      ]
    })
  }
}

export default index
