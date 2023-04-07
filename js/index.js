// 监控区域
!function () {
    $('.monitor .tabs a').on('click', function () {
        $(this).addClass('active').siblings('a').removeClass('active')
        $('.monitor .content').eq($(this).index()).show().siblings('.content').hide()
    })
}();
// 饼形图
(function () {
    let myCharts = echarts.init(document.querySelector('.pie'))
    var option = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // 调色盘颜色列表
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [
            {
                name: '点位分布',
                type: 'pie',
                radius: [10, 70],
                center: ['50%', '50%'],
                roseType: 'area',
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    // 连接扇形图线长
                    length: 6,
                    // 连接文字线长
                    length2: 8
                }
            }
        ]
    }
    myCharts.setOption(option)
    // $(window).on('resize',function () {
    //     myCharts.resize();
    //     console.log('1');
    // })
    // 随着设备宽度变化，图饼改变
    window.addEventListener('resize', function () {
        myCharts.resize()
    })
})()

// 用户总量柱状图
!function () {
    let item = {
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色 是为了不让柱子高亮，没有这个禁止高亮，让鼠标经过时候颜色换成和原来颜色一致就可以达到效果
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0' //因为用display：none无效 
        },
    }
    let myCharts = echarts.init(document.querySelector('.bar'))
    var option = {
        // 颜色
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1, color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false
            // globalCoord: false // 缺省为 false
        },
        tooltip: {
            trigger: 'item',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'

        },
        xAxis: [
            {
                type: 'category',
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    show: false,
                    alignWithLabel: false
                },
                // 文字设置
                axisLabel: {
                    color: '#4c9bfd',
                    fontSize: 10,
                    interval: 0 //间隔几个元素显示
                },
                // x坐标轴颜色设置
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                // 文字设置
                axisLabel: {
                    color: '#4c9bfd'
                },
                // x坐标轴颜色设置
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                },
                // y轴 分割线的样式 
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    }
    myCharts.setOption(option)
    window.addEventListener('resize', function () {
        myCharts.resize()
    })
}();

//可以封装

// 第三列折线图
(function () {
    // 数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    let myCharts = echarts.init(document.querySelector('.line'))
    let option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ["邮件营销", "联盟广告"],
            right: '10%', //组件的位置
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true, //包含文字刻度
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            // 刻度设置
            axisTick: {
                show: false // 去除刻度线
            },
            // 文字设置
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            // 轴线设置
            axisLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        yAxis: {
            type: 'value',
            // 刻度设置
            axisTick: {
                show: false // 去除刻度线
            },
            // 文字设置
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            // 轴线设置
            axisLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            },
            //Y轴切割线设置
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [
            {
                name: '邮件营销', //legend里面的data对应数据一致组件才能显示出来
                type: 'line',
                stack: '总量',
                data: data.year[0]
                , smooth: true //平滑曲线
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量2',
                data: data.year[1]
                , smooth: true //平滑曲线
            }
        ]
    }
    myCharts.setOption(option)
    window.addEventListener('resize', function () {
        myCharts.resize()
    })

    // 点击折线图切换
    $('.sales .caption a').on('click', function () {
        index = $(this).index() - 1
        $(this).addClass('active').siblings('a').removeClass('active')
        // 拿到自定义属性值
        let key = $(this).attr('data-type')
        option.series[0].data = data[key][0]
        option.series[1].data = data[key][1]
        // 更新渲染
        myCharts.setOption(option)
    })

    // 定时器
    let index = 0
    // let timer=setInterval(() => {
    //     ++index;
    // //   console.log(index);
    //     if (index>=4) {
    //         index=0;
    //     }
    //     $('.sales .caption a').eq(index).click();
    // }, 1000);
    // 进入后停止定时器
    // $('.sales').hover(()=>{
    //     clearInterval(timer);
    // },()=>{
    //     timer=setInterval(() => {
    //         index++;
    //         if (index>=4) {
    //             index=0;
    //         }
    //         $('.sales .caption a').eq(index).click();
    //     }, 1000);
    // })
})();

// 第三列销售进度圆图
(function () {
    let myCharts = echarts.init(document.querySelector('.gauge'))
    let option = {
        // 调整颜色
        color: [new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0,
            0,
            0,
            1,
            [
                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                { offset: 1, color: "#005fc1" } // 1 结束颜色
            ]
        ), '#12274d', 'transparent'],
        series: [
            {
                name: '销售进度',
                type: 'pie',
                // 放大图形
                radius: ['130%', '150%'],
                // 调整位置
                center: ['48%', '80%'],
                // 起始角度
                startAngle: 180,
                // 鼠标进入扇区变大 老版本hoverOffset 新版本selectedOffset
                hoverOffset: 0,
                // avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                // 半分比=第一个值/第三个值     第三个值=第一个值+第二个值
                data: [{ value: 150 }, { value: 50 }, { value: 200 }]
            }
        ]
    }
    myCharts.setOption(option)
    window.addEventListener('resize', function () {
        myCharts.resize()
    })
})();

// 第三列热榜
(function () {
    var hotData = [
        {
            city: '北京',  // 城市
            sales: '25, 179',  // 销售额
            flag: true, //  上升还是下降
            brands: [   //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ]
    let supHtml = ''
    // 渲染html
    $.each(hotData, (index, item) => {
        supHtml += `
        <li>
        <span>${item.city}</span>
        <span>${item.sales} <s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span>
        </li>
        `
    })
    // 添加到sup里面
    $('.sup').html(supHtml)


    $('.sup li').on('mouseenter', function () {
        render($(this))
    })
    function render (jqObj) {
        index = jqObj.index()
        let subHtml = ''
        let arr = hotData[jqObj.index()].brands
        $.each(arr, (index, item) => {
            subHtml += `
            <li>
                <span>${item.name}</span>
                <span>${item.num}<s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span>
            </li>
            `
        })
        // 添加到sub里
        $('.province .sub').html(subHtml)

        // 添加类名
        jqObj.addClass('active').siblings().removeClass('active')

    }
    let index = 0
    // $('.sup li').eq(0).mouseenter();
    render($('.sup li').eq(0))
    // 定时器
    let timer = setInterval(() => {
        index++
        if (index >= 5) {
            index = 0
        }
        // $('.sup li').eq(index).mouseenter();
        render($('.sup li').eq(index))
    }, 1000)
    // 鼠标进入关闭定时器
    $('.sup li').hover(function () {
        clearInterval(timer)
        console.log('进入')
    }, function () {
        timer = setInterval(() => {
            index++
            if (index > 4) {
                index = 0
            }
            // $('.sup li').eq(index).mouseenter();
            render($('.sup li').eq(index))
        }, 1000)
        // console.log('移出');
    })
})()
// 动画移入移出
$('.content').on({
    mouseover: function () {
        $('.marquee-view').removeClass('run-move').addClass('pauseed-move')
    },
    mouseout: function () {
        $('.marquee-view').removeClass('pauseed-move').addClass('run-move')
    }
})


