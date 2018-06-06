<template>
    <div id="main">
        <div class="body">
            <div class="text-space-between">
                <div class="page-title">总览</div>
                <div class="page-title-right">数据截止至：{{filters.formatDate(new Date(), 'yyyy-MM-dd')}}</div>
            </div>
            <hr>
            <Row :gutter="20" style="padding: 0 .2rem;">
                <Col :xs="12" :sm="8">
                <div class="info-block">
                    <div class="content-icon">
                        <img src="../../assets/icon_main1.png" width="70px">
                    </div>
                    <div class="content-text">
                        <div class="content-1">
                            访问次数
                        </div>
                        <br>
                        <div class="content-2">
                            <span style="font-size: .3rem;">50</span>次
                        </div>
                    </div>
                </div>
                </Col>
                <Col :xs="12" :sm="8">
                <div class="info-block">
                    <div class="content-icon">
                        <img src="../../assets/icon_main3.png" width="70px">
                    </div>
                    <div class="content-text">
                        <div class="content-1">
                            审批中
                        </div>
                        <br>
                        <div class="content-2">
                            <span style="font-size: .3rem;">722</span>单
                        </div>
                    </div>
                </div>
                </Col>
                <Col :xs="12" :sm="8">
                <div class="info-block">
                    <div class="content-icon">
                        <img src="../../assets/icon_main4.png" width="70px">
                    </div>
                    <div class="content-text">
                        <div class="content-1">
                            命中
                        </div>
                        <br>
                        <div class="content-2">
                            <span style="font-size: .3rem;">35</span>次
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
        <div class="body" style="margin-top: .15rem">
            <div class="text-space-between">
                <div class="page-title">图表统计</div>
            </div>
            <hr>
            <Row>
                <Col span="24">
                <div class="body-report">
                    <div id="chart" style="width: 100%; height: 400px;"></div>
                </div>
                </Col>
            </Row>
        </div>
        <div class="body" style="margin-top: .15rem">
            <div class="text-space-between">
                <div class="page-title">数据表格</div>
            </div>
            <hr>
            <div style="margin-top: .15rem">
                <c-table :columns="columns" :datas="datas"></c-table>
            </div>
        </div>
        <Modal v-model="modal" title="查看详情">
            <div class="body">
                <div class="body-report">
                    <section class="msg">
                        <div>
                            <label>规则名</label>
                            <p>{{detail.name}}</p>
                        </div>
                        <div>
                            <label>所属组合</label>
                            <p>{{detail.group}}</p>
                        </div>
                        <div>
                            <label>发生时间</label>
                            <p>{{detail.datetime}}</p>
                        </div>
                        <div>
                            <label>异常情况</label>
                            <p>{{detail.error}}</p>
                        </div>
                    </section>
                </div>
            </div>
        </Modal>
    </div>
</template>
<script>
import echarts from "echarts"
import cTable from "../../components/table";
export default {
    name: 'main',
    components: {
        cTable
    },
    data() {
        return {
            modal: false,
            detail: {},
            datas: [{
                name: '年龄',
                group: '客群划分',
                datetime: '2017-08-08 13:20'
            }, {
                name: '收入',
                group: '准入条件',
                datetime: '2017-08-08 14:20'
            }, {
                name: '年龄',
                group: '客群划分',
                datetime: '2017-08-08 13:20'
            }, {
                name: '收入',
                group: '准入条件',
                datetime: '2017-08-08 14:20'
            }, {
                name: '年龄',
                group: '客群划分',
                datetime: '2017-08-08 13:20'
            }, {
                name: '收入',
                group: '准入条件',
                datetime: '2017-08-08 14:20'
            }, {
                name: '年龄',
                group: '客群划分',
                datetime: '2017-08-08 13:20'
            }, {
                name: '收入',
                group: '准入条件',
                datetime: '2017-08-08 14:20'
            }, {
                name: '年龄',
                group: '客群划分',
                datetime: '2017-08-08 13:20'
            }, {
                name: '收入',
                group: '准入条件',
                datetime: '2017-08-08 14:20'
            }, {
                name: '年龄',
                group: '客群划分',
                datetime: '2017-08-08 13:20'
            }, {
                name: '收入',
                group: '准入条件',
                datetime: '2017-08-08 14:20'
            }],
            columns: [{
                title: '类型',
                key: 'name'
            }, {
                title: '分组',
                key: 'group'
            }, {
                title: '发生时间',
                key: 'datetime'
            }, {
                title: '操作',
                render: (h, params) => {
                    return h('a', {
                        on: {
                            click: () => {
                                this.$Message.info('操作')
                            }
                        }
                    }, '操作')
                }
            }]
        }
    },
    mounted() {
        this.doChart()
    },
    methods: {
        setDetail(row) {
            this.$router.push(`/rules/detail`)
        },
        doChart() {
            let chart = echarts.init(document.getElementById('chart'))
            chart.clear()
            chart.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    y: 'bottom',
                    data: ['本周命中', '上周命中', '本周运行', '上周运行']
                },
                grid: {
                    top: '5%',
                    left: '0%',
                    right: '4%',
                    bottom: '15%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['客群划分', '客户准入', '资金流动'],
                        axisLabel: {
                            interval: 0,
                            rotate: 40
                        },
                    }
                ],
                yAxis: [{
                    type: 'value',
                }],
                series: [
                    {
                        name: '本周命中',
                        type: 'bar',
                        barMaxWidth: 20,
                        stack: 'left',
                        data: [100, 90, 80]
                    },
                    {
                        name: '上周命中',
                        type: 'bar',
                        barMaxWidth: 20,
                        stack: 'left',
                        data: [50, 48, 46]
                    },
                    {
                        name: '本周运行',
                        type: 'bar',
                        barMaxWidth: 20,
                        stack: 'right',
                        data: [50, 48, 46]
                    },
                    {
                        name: '上周运行',
                        type: 'bar',
                        barMaxWidth: 20,
                        stack: 'right',
                        data: [50, 48, 46]
                    }
                ]
            })

            window.onresize = () => {
                chart.resize()
            }
        }
    }
}
</script>