// 凤凰山基地数据
var temStr1 = [205, 600, 150, 290, 385, 235, 235];
//温度数据
var temperatureDate =  [24, 25, 26, 27,28, 29,30];
//湿度数据
var humidityDate =  [24, 25, 26, 27,28, 29,30];
// 凤凰山基地数据
/*Highcharts.setOptions({
    global: {
        useUTC: false
    }
});*/
function activeLastPointToolip(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length-1]);
}
/*var chart = Highcharts.chart('integrated1', {
    chart: {
        type: 'spline'
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: null
        }
    },
    legend: {
            enabled: false 
        },
    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    yAxis: {
        title: null
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y} 只'
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },
    series: [{
        name: '害虫数量',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: [
            [Date.UTC(2019,  0, 2,0), 0   ],
            [Date.UTC(2019,  0, 2,1), 16  ],
            [Date.UTC(2019,  0, 2,2), 51   ],
            [Date.UTC(2019,  0, 2,3), 231   ],
            [Date.UTC(2019,  0, 2,4), 234   ],
            [Date.UTC(2019,  0, 2,5), 12   ],
            [Date.UTC(2019,  0, 2,6), 54   ],
            [Date.UTC(2019,  0, 2,7), 32   ],
            [Date.UTC(2019,  0, 2,8), 312   ],
            [Date.UTC(2019,  0, 2,9), 132   ],
            [Date.UTC(2019,  0, 2,10), 322   ],
            [Date.UTC(2019,  0, 2,11), 302   ],
            [Date.UTC(2019,  0, 2,12), 12   ],
            [Date.UTC(2019,  0, 2,13), 122   ],
            [Date.UTC(2019,  0, 2,14), 332   ],
            [Date.UTC(2019,  0, 2,15), 132   ],
            [Date.UTC(2019,  0, 2,16), 234   ],
            [Date.UTC(2019,  0, 2,17), 212   ],
            [Date.UTC(2019,  0, 2,18), 345  ],
            [Date.UTC(2019,  0, 2,19), 32   ],
            [Date.UTC(2019,  0, 2,20), 35   ],
            [Date.UTC(2019,  0, 2,21), 42   ],
            [Date.UTC(2019,  0, 2,22), 25   ],
            [Date.UTC(2019,  0, 2,23), 37   ],
            [Date.UTC(2019,  0, 3,0,0), 133   ],
            [Date.UTC(2019,  0, 3,1,0), 113   ],
            [Date.UTC(2019,  0, 3,2,0), 133   ],
            [Date.UTC(2019,  0, 3,3,0), 213   ],
            [Date.UTC(2019,  0, 3,4,0), 113   ],
            [Date.UTC(2019,  0, 3,5,0), 113   ],
            [Date.UTC(2019,  0, 3,6,0), 113   ],
            [Date.UTC(2019,  0, 3,7,0), 13   ],
            [Date.UTC(2019,  0, 3,8,0), 143   ],
            [Date.UTC(2019,  0, 3,9,0), 133   ],
            [Date.UTC(2019,  0, 3,10,0), 113   ],
            [Date.UTC(2019,  0, 3,11,0), 113   ],
            [Date.UTC(2019,  0, 3,12,0), 123   ],
            [Date.UTC(2019,  0, 3,13,0), 13   ],
            [Date.UTC(2019,  0, 3,14,0), 123   ],
            [Date.UTC(2019,  0, 3,15,0), 143   ],
            [Date.UTC(2019,  0, 3,16,0), 123   ],
            [Date.UTC(2019,  0, 3,17,0), 133   ],
            [Date.UTC(2019,  0, 3,18,0), 113   ],
            [Date.UTC(2019,  0, 3,19,0), 13   ],
            [Date.UTC(2019,  0, 3,20,0), 213   ],
            [Date.UTC(2019,  0, 3,21,0), 113   ],
            [Date.UTC(2019,  0, 3,22,0), 213   ],
            [Date.UTC(2019,  0, 3,23,0), 313   ],
            [Date.UTC(2019,  0, 4,0,0), 133   ],
            [Date.UTC(2019,  0, 4,1,0), 113   ],
            [Date.UTC(2019,  0, 4,2,0), 133   ],
            [Date.UTC(2019,  0, 4,3,0), 213   ],
            [Date.UTC(2019,  0, 4,4,0), 113   ],
            [Date.UTC(2019,  0, 4,5,0), 113   ],
            [Date.UTC(2019,  0, 4,6,0), 113   ],
            [Date.UTC(2019,  0, 4,7,0), 13   ],
            [Date.UTC(2019,  0, 4,8,0), 143   ],
            [Date.UTC(2019,  0, 4,9,0), 133   ],
            [Date.UTC(2019,  0, 4,10,0), 113   ],
            [Date.UTC(2019,  0, 4,11,0), 113   ],
            [Date.UTC(2019,  0, 4,12,0), 123   ],
            [Date.UTC(2019,  0, 4,13,0), 13   ],
            [Date.UTC(2019,  0, 4,14,0), 123   ],
            [Date.UTC(2019,  0, 4,15,0), 143   ],
            [Date.UTC(2019,  0, 4,16,0), 123   ],
            [Date.UTC(2019,  0, 4,17,0), 133   ],
            [Date.UTC(2019,  0, 4,18,0), 113   ],
            [Date.UTC(2019,  0, 4,19,0), 13   ],
            [Date.UTC(2019,  0, 4,20,0), 213   ],
            [Date.UTC(2019,  0, 4,21,0), 113   ],
            [Date.UTC(2019,  0, 4,22,0), 213   ],
            [Date.UTC(2019,  0, 4,23,0), 313   ],
            [Date.UTC(2019,  0, 5,0,0), 133   ],
            [Date.UTC(2019,  0, 5,1,0), 113   ],
            [Date.UTC(2019,  0, 5,2,0), 133   ],
            [Date.UTC(2019,  0, 5,3,0), 213   ],
            [Date.UTC(2019,  0, 5,4,0), 113   ],
            [Date.UTC(2019,  0, 5,5,0), 113   ],
            [Date.UTC(2019,  0, 5,6,0), 113   ],
            [Date.UTC(2019,  0, 5,7,0), 13   ],
            [Date.UTC(2019,  0, 5,8,0), 143   ],
            [Date.UTC(2019,  0, 5,9,0), 133   ],
            [Date.UTC(2019,  0, 5,10,0), 113   ],
            [Date.UTC(2019,  0, 5,11,0), 113   ],
            [Date.UTC(2019,  0, 5,12,0), 123   ],
            [Date.UTC(2019,  0, 5,13,0), 13   ],
            [Date.UTC(2019,  0, 5,14,0), 123   ],
            [Date.UTC(2019,  0, 5,15,0), 143   ],
            [Date.UTC(2019,  0, 5,16,0), 123   ],
            [Date.UTC(2019,  0, 5,17,0), 133   ],
            [Date.UTC(2019,  0, 5,18,0), 113   ],
            [Date.UTC(2019,  0, 5,19,0), 13   ],
            [Date.UTC(2019,  0, 5,20,0), 213   ],
            [Date.UTC(2019,  0, 5,21,0), 113   ],
            [Date.UTC(2019,  0, 5,22,0), 213   ],
            [Date.UTC(2019,  0, 5,23,0), 313   ],
            [Date.UTC(2019,  0, 6,0,0), 133   ],
            [Date.UTC(2019,  0, 6,1,0), 113   ],
            [Date.UTC(2019,  0, 6,2,0), 133   ],
            [Date.UTC(2019,  0, 6,3,0), 213   ],
            [Date.UTC(2019,  0, 6,4,0), 113   ],
            [Date.UTC(2019,  0, 6,5,0), 113   ],
            [Date.UTC(2019,  0, 6,6,0), 113   ],
            [Date.UTC(2019,  0, 6,7,0), 13   ],
            [Date.UTC(2019,  0, 6,8,0), 143   ],
            [Date.UTC(2019,  0, 6,9,0), 131   ],
            [Date.UTC(2019,  0, 6,10,0), 113   ],
            [Date.UTC(2019,  0, 6,11,0), 113   ],
            [Date.UTC(2019,  0, 6,12,0), 123   ],
            [Date.UTC(2019,  0, 6,13,0), 13   ],
            [Date.UTC(2019,  0, 6,14,0), 123   ],
            [Date.UTC(2019,  0, 6,15,0), 143   ],
            [Date.UTC(2019,  0, 6,16,0), 123   ],
            [Date.UTC(2019,  0, 6,17,0), 133   ],
            [Date.UTC(2019,  0, 6,18,0), 113   ],
            [Date.UTC(2019,  0, 6,19,0), 13   ],
            [Date.UTC(2019,  0, 6,20,0), 213   ],
            [Date.UTC(2019,  0, 6,21,0), 113   ],
            [Date.UTC(2019,  0, 6,22,0), 210   ],
            [Date.UTC(2019,  0, 6,23,0), 313   ],
            [Date.UTC(2019,  0, 7,0,0), 133   ],
            [Date.UTC(2019,  0, 7,1,0), 113   ],
            [Date.UTC(2019,  0, 7,2,0), 133   ],
            [Date.UTC(2019,  0, 7,3,0), 213   ],
            [Date.UTC(2019,  0, 7,4,0), 113   ],
            [Date.UTC(2019,  0, 7,5,0), 113   ],
            [Date.UTC(2019,  0, 7,6,0), 113   ],
            [Date.UTC(2019,  0, 7,7,0), 13   ],
            [Date.UTC(2019,  0, 7,8,0), 143   ],
            [Date.UTC(2019,  0, 7,9,0), 133   ],
            [Date.UTC(2019,  0, 7,10,0), 113   ],
            [Date.UTC(2019,  0, 7,11,0), 213   ],
            [Date.UTC(2019,  0, 7,12,0), 23   ],
            [Date.UTC(2019,  0, 7,13,0), 13   ],
            [Date.UTC(2019,  0, 7,14,0), 123   ],
            [Date.UTC(2019,  0, 7,15,0), 143   ],
            [Date.UTC(2019,  0, 7,16,0), 123   ],
            [Date.UTC(2019,  0, 7,17,0), 33   ],
            [Date.UTC(2019,  0, 7,18,0), 113   ],
            [Date.UTC(2019,  0, 7,19,0), 13   ],
            [Date.UTC(2019,  0, 7,20,0), 213   ],
            [Date.UTC(2019,  0, 7,21,0), 113   ],
            [Date.UTC(2019,  0, 7,22,0), 213   ],
            [Date.UTC(2019,  0, 7,23,0), 313   ],
            [Date.UTC(2019,  0, 8,0,0), 133   ],
            [Date.UTC(2019,  0, 8,1,0), 113   ],
            [Date.UTC(2019,  0, 8,2,0), 133   ],
            [Date.UTC(2019,  0, 8,3,0), 213   ],
            [Date.UTC(2019,  0, 8,4,0), 213   ],
            [Date.UTC(2019,  0, 8,5,0), 13   ],
            [Date.UTC(2019,  0, 8,6,0), 113   ],
            [Date.UTC(2019,  0, 8,7,0), 13   ],
            [Date.UTC(2019,  0, 8,8,0), 143   ],
            [Date.UTC(2019,  0, 8,9,0), 133   ],
            [Date.UTC(2019,  0, 8,10,0), 113   ],
            [Date.UTC(2019,  0, 8,11,0), 113   ],
            [Date.UTC(2019,  0, 8,12,0), 123   ],
            [Date.UTC(2019,  0, 8,13,0), 13   ],
            [Date.UTC(2019,  0, 8,14,0), 123   ],
            [Date.UTC(2019,  0, 8,15,0), 143   ],
            [Date.UTC(2019,  0, 8,16,0), 123   ],
            [Date.UTC(2019,  0, 8,17,0), 133   ],
            [Date.UTC(2019,  0, 8,18,0), 123   ],
            [Date.UTC(2019,  0, 8,19,0), 13   ],
            [Date.UTC(2019,  0, 8,20,0), 213   ],
            [Date.UTC(2019,  0, 8,21,0), 113   ],
            [Date.UTC(2019,  0, 8,22,0), 213   ],
            [Date.UTC(2019,  0, 8,23,0), 313   ],
        ]
    }]
});*/

/*var chart = Highcharts.chart('integrated1', {
    chart: {
        type: 'line',
        marginRight: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        events: {
            load: function () {
                var series = this.series[0],series1 = this.series[1],series2 = this.series[2],series3 = this.series[3]
                chart = this;
                activeLastPointToolip(chart);
                setInterval(function () {
                    var x = (new Date()).getTime(); // 当前时间
						//温度数据
                    series.addPoint([x, temperatureDate[Math.floor(Math.random()*temperatureDate.length)]], true, true);
                    activeLastPointToolip(chart);
                }, 5000);
            }
        }
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
        labels:{
            style:{ // 此处可设置样式
                staggerLines:6,
                fontSize:'17px',
                tickPixelInterval:100,
                color:'#B0D3FC',
                fontWeight:'bold'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        },
        gridLineColor: '#64aafa',//纵向网格线颜色
            gridLineDashStyle: 'longdash',//横向网格线样式
           gridLineWidth: 1, //横向网格线宽度,
        labels:{
            style:{ // 此处可设置样式
                staggerLines:6,
                fontSize:'17px',
                tickPixelInterval:100,
                color:'#B0D3FC',
                fontWeight:'bold'
            }
        },
    },
    tooltip: {
        formatter: function () {
            return  Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>'+
            '<b>' + this.series.name+' : '+Highcharts.numberFormat(this.y, this.series.options.digit)+'</b><br/>';
        }
    },
        legend: {
             enabled: false 
        },
    series: [{
	name: '害虫数量',
		digit:2,
        data: [1,2,3,4,5,6,7,8,9],
        color: '#ff5f19',
        lineWidth: 2
    }]
});*/

// 泉河基地数据
// var chart0 = Highcharts.chart('qh_container', {
//     chart: {
//         type: '',
//         backgroundColor: 'rgba(0, 0, 0, 0)'
//     },
//     title: {
//         text: '-',
//         margin: 46,
//         backgroundColor: 'rgba(0, 0, 0, 0)'
//     },
//     legend: {
//         align: 'right',
//         verticalAlign: 'top',
//         floating: true,
//         borderWidth: 0
//     },
//     xAxis: {
//         categories: [
//             '0:00','4:00','8:00','12:00','16:00','18:00'
//         ],
//         plotBands: [{ // 标识出地点
//             from: 4.5,
//             to: 6.5
//         }],
//         labels:{
//             style:{ // 此处可设置样式
//                 staggerLines:6,
//                 fontSize:'17px',
//                 tickPixelInterval:100,
//                 color:'#B0D3FC',
//                 fontWeight:'bold'
//             }
//         },
//         column: {
//             pointPadding: 0.2,
//             pointWidth: 30  //柱子的宽度30px
//         }
//     },
//     yAxis: {
//         lineWidth: 1,//.纵坐标
//         labels:{
//             style:{ // 此处可设置样式
//                 fontSize:'17px',
//                 color:'#B0D3FC',
//                 fontWeight:'bold'
//             }
//         },
//         title: {
//             text: ''
//         },
//         gridLineColor: '#64aafa',//纵向网格线颜色
//         gridLineDashStyle: 'longdash',//横向网格线样式
//         gridLineWidth: 1 //横向网格线宽度
//     },
//     tooltip: {
//         shared: true,
//         valueSuffix: ''
//     },
//
//     plotOptions: {
//         areaspline: {
//             fillOpacity: 0.5
//         }, series: {
//             cursor: 'pointer',
// /*            events: {,
//                 click: function(e) {
//                     alert('X轴的值：'+e.point.x +'y轴的值：'+e.point.y+' 指标的名称:'+this.name);
//                 }
//             }*/
//         }
//     },
//     series: [{
//         name: '土壤温湿度/C',
//         data: temStr5,
//         color: '#FFFF00',
//         lineWidth: 2,
//         left:'-100px'
//     }, {
//         name: 'CO2/100%',
//         data: temStr6,
//         color: '#6BFAFF',
//         lineWidth: 2
//     }]
// });
function activeLastPointToolip1(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length-1]);
}
/*var chart = Highcharts.chart('qh_container', {
    chart: {
        type: 'line',
        marginRight: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        events: {
            load: function () {
                var series = this.series[0],series1 = this.series[1],series2 = this.series[2],series3 = this.series[3]
                chart = this;
                activeLastPointToolip1(chart);
                setInterval(function () {
                    var x = (new Date()).getTime(); // 当前时间
					//温度数据
                    series.addPoint([x, temperatureDate[Math.floor(Math.random()*temperatureDate.length)]], true, true);
					//湿度数据
                    series1.addPoint([x, Math.floor(Math.random()*30+15)], true, true);
					//NO2数据
                    series2.addPoint([x, Math.random()/100], true, true);
					//CO2数据
                    series3.addPoint([x, Math.random()/100], true, true);
                    activeLastPointToolip(chart);
                }, 5000);
            }
        }
    },
    title: {
        text: '动态模拟实时数据'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,            labels:{
            style:{ // 此处可设置样式
                staggerLines:6,
                fontSize:'17px',
                tickPixelInterval:100,
                color:'#B0D3FC',
                fontWeight:'bold'
            }
        },
    },
    yAxis: {
        title: {
            text: null
        },
        gridLineColor: '#64aafa',//纵向网格线颜色
        gridLineDashStyle: 'longdash',//横向网格线样式
        gridLineWidth: 1, //横向网格线宽度,
        labels:{
            style:{ // 此处可设置样式
                staggerLines:6,
                fontSize:'17px',
                tickPixelInterval:100,
                color:'#B0D3FC',
                fontWeight:'bold'
            }
        },
    },
    tooltip: {
        formatter: function () {
            return  Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>'+
            '<b>' + this.series.name+' : '+Highcharts.numberFormat(this.y, this.series.options.digit)+'</b><br/>';
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 0
    },
    series: [{
	name: '土壤温度(℃)',
		digit:2,
        data: (function () {
            // 生成随机值
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: temperatureDate[Math.floor(Math.random()*temperatureDate.length)]
                });
            }
            return data;
        }()),
        color: '#ff5f19',
        lineWidth: 2
    },
       {
        name: '土壤湿度(%RH)',
				digit:2,
        data: (function () {
            // 生成随机值
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.floor(Math.random()*30+15)
                });
            }
            return data;
        }()),
        color: '#ff24cd',
        lineWidth: 2
    }
   ,{
        name: 'NO2(mg/m³)',
				digit:4,
        data: (function () {
            // 生成随机值
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()/100
                });
            }
            return data;
        }()),
        color: '#FFFF00',
        left:'-100px'
    }
        ,{
            name: 'CO2(mg/m³)',
					digit:4,
            data: (function () {
                // 生成随机值
                var data = [],
                    time = (new Date()).getTime(),
                    i;
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()/100
                    });
                }
                return data;
            }()),
            color: '#6BFAFF',
            lineWidth: 2
        }]
});
// 2016水肥指数数据
var chart1 = Highcharts.chart('sf_container',{
    chart: {
        type: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    title: {
        text: '-',
        margin: 46,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    subtitle: {
        text: ''
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 0
    },
    xAxis: {
        categories: [
            '凤凰山基地','泉河基地','白河基地'//纵坐标参数
        ],
        labels:{
            style:{ // 例图样式
                fontSize:'17px',
                color:'#B0D3FC',

            }
        },
        crosshair: true
    },
    yAxis: {
        lineWidth: 1,//.添加纵坐标轴
        min: 0,
        title: {
            text: ''
        }, labels:{
            style:{ // 此处可设置样式
                fontSize:'17px',
                color:'#B0D3FC',
                fontWeight:'bold'
            }
        },
        gridLineColor: '#000',//纵向网格线颜色
        gridLineDashStyle: 'longdash',//横向网格线样式
        gridLineWidth: 1 //横向网格线宽度
    },
    tooltip: {
        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><span>{point.y:.f}</span></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            groupPadding : 0.45,//设置柱子之间的距离
            pointWidth: 10//设置柱子的宽度
        }
    },
    series: [{
        name: '水',
        color: '#6BFAFF',
        data: [250,190,125],//横坐标显示参数
        borderWidth: 0
    }, {
        name: '肥',
        color: '#FFFF00',
        data: [150,50, 50],//横坐标显示参数
        borderWidth: 0
    }]
});
// 2017水肥指数数据
var chart2 = Highcharts.chart('sf_container1',{
    chart: {
        type: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    title: {
        text: '-',
        margin: 46,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    subtitle: {
        text: ''
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 0
    },
    xAxis: {
        categories: [
            '凤凰山基地','泉河基地','白河基地'//纵坐标参数
        ],
        labels:{
            style:{ // 例图样式
                fontSize:'17px',
                color:'#B0D3FC',

            }
        },
        crosshair: true
    },
    yAxis: {
        lineWidth: 1,//.添加纵坐标轴
        min: 0,
        title: {
            text: ''
        }, labels:{
            style:{ // 此处可设置样式
                fontSize:'17px',
                color:'#B0D3FC',
                fontWeight:'bold'
            }
        },
        gridLineColor: '#000',//纵向网格线颜色
        gridLineDashStyle: 'longdash',//横向网格线样式
        gridLineWidth: 1 //横向网格线宽度
    },
    tooltip: {
        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><span>{point.y:.f}</span></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            groupPadding : 0.45,//设置柱子之间的距离
            pointWidth: 10//设置柱子的宽度
        }
    },
    series: [{
        name: '水',
        color: '#6BFAFF',
        data: [95,70,165],//横坐标显示参数
        borderWidth: 0
    }, {
        name: '肥',
        color: '#FFFF00',
        data: [210,150, 80],//横坐标显示参数
        borderWidth: 0
    }]
});
// 2018水肥指数数据
var chart3 = Highcharts.chart('sf_container2',{
    chart: {
        type: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    title: {
        text: '-',
        margin: 46,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    subtitle: {
        text: ''
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 0
    },
    xAxis: {
        categories: [
            '凤凰山基地','泉河基地','白河基地'//纵坐标参数
        ],
        labels:{
            style:{ // 例图样式
                fontSize:'17px',
                color:'#B0D3FC',

            }
        },
        crosshair: true
    },
    yAxis: {
        lineWidth: 1,//.添加纵坐标轴
        min: 0,
        title: {
            text: ''
        }, labels:{
            style:{ // 此处可设置样式
                fontSize:'17px',
                color:'#B0D3FC',
                fontWeight:'bold'
            }
        },
        gridLineColor: '#000',//纵向网格线颜色
        gridLineDashStyle: 'longdash',//横向网格线样式
        gridLineWidth: 1 //横向网格线宽度
    },
    tooltip: {
        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><span>{point.y:.f}</span></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            groupPadding : 0.45,//设置柱子之间的距离
            pointWidth: 10//设置柱子的宽度
        }
    },
    series: [{
        name: '水',
        color: '#6BFAFF',
        data: [210,110,95],//横坐标显示参数
        borderWidth: 0
    }, {
        name: '肥',
        color: '#FFFF00',
        data: [250,100, 130],//横坐标显示参数
        borderWidth: 0
    }]
});*/
<!--视频点击切换-->
var carousel = $('.agriculture_visualization_details ul'),
    arrowLeft = $('.btn_left'),
    arrowRight = $('.btn_right'),
    dy_ksh = $(".dy_ksh li"),
    dy_ksh_length = dy_ksh.length;
/* 判断监控数量*/

if(!(parseInt(dy_ksh_length)%3)){
    var maxSum = parseInt(dy_ksh_length)/3;
}else{
    if(parseInt(dy_ksh_length/3)){
        var maxSum = parseInt(dy_ksh_length/3)+1;
    }else{
        var maxSum = 1;
    }
}
var num = 2,carouselWidth=993,count=0;

//设置左右箭头的点击事件

arrowLeft.click(function (e) {
    e.preventDefault()
    $('.btn_tea-brigade_right').removeClass("right_without")
    if(!count){
        return
    }else if(count==1){
        $('.btn_tea-brigade_left').removeClass("left_have")
    }//最前面一页
    move(true)
})
arrowRight.click(function(e){
    e.preventDefault()
    $('.btn_tea-brigade_left').addClass("left_have")
    if(count==maxSum-1){
        return
    }else if(count==maxSum-2){
        $('.btn_tea-brigade_right').addClass("right_without")
    }//最后一页
    move(false)
})

// 动画 主函数
function move(flag) {
    if(!flag){
        count++
        l = -carouselWidth*count
        if(count===num-1){
            carousel.finish().animate({
                left: l
            }, 500, function(){
                count = 1
                $(this).css('left', -carouselWidth*count)
            })
        }else{
            carousel.finish().animate({
                left: l
            }, 500)
        }
    }else{
        // $('.tea-brigade_details').css('left').replace('px','')
        count--
        l = -carouselWidth*count
        if(count === 0){
            carousel.finish().animate({
                left: l
            }, 500, function(){
                count = num - 2
                $(this).css('left', -carouselWidth*count)
            })
        }else{
            carousel.finish().animate({
                left: l
            }, 500)
        }
    }
}
$("ul.layui-tab-title li:eq(0)").addClass("layui-this");