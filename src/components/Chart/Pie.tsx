import React, { useState, useEffect, useRef } from 'react';
import F2 from '@antv/f2';
import PieLabel from '@antv/f2/lib/plugin/pie-label';

// 饼图
export interface ChartProps {
    data: any;
    padding?: any;
    width?: any;
    height?: any;
}

const PieChart: React.FC<ChartProps> = (props) => {
    const { data, padding, width, height } = props;

    let canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let chart: any = canvasRef.current !== null && new F2.Chart({
            el: canvasRef.current,
            plugins: PieLabel,
            pixelRatio: window.devicePixelRatio,
            padding,
            width,
            height,
        });

        chart.source(data);
        chart.coord('polar', {
            startAngle: -Math.PI,
            endAngle: 0,
            transposed: true,
            radius: 0.9,
            innerRadius: 0.5,
        });
        chart.axis(false);
        chart.legend(false);

        // tooltip: {
        //     useHTML: true,
        //     headerFormat: '<p></p>',
        //     pointFormatter: function(){
        //         return this.name + ': ' + common.toStdAmount(this.amount || 0) + ' 元';
        //     },
        //     valueDecimals: 2,
        // },
        // chart.tooltip({
        //     showItemMarker: false,
        //     onShow: function onShow(ev: any) {
        //         const items = ev.items;
        //         items[0].name = null;
        //         items[0].name = items[0].title;
        //         items[0].value = '¥ ' + items[0].value;
        //     }
        // });
        // chart.tooltip({
        //     custom: true,
        //     showXTip: true,
        //     showYTip: true,
        //     snap: true,
        //     crosshairsType: 'xy',
        //     crosshairsStyle: {
        //         lineDash: [2]
        //     }
        // });
        // chart.tooltip({
        //     custom: true,
        //     onChange: function (obj: any) {

        //     }
        // });
        // chart.guide()
        //     .html({
        //         position: ['50%', '50%'],
        //         html: `
        //                 <div style="text-align: center;width:150px;height: 50px;">\n
        //                     <p style="font-size: 12px;color: #999;margin: 0" id="title"></p>\n
        //                     <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n
        //                 </div>`
        //     });
        chart
            .interval()
            .position('const*money')
            .adjust('stack')
            .color('type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14']);
        chart.pieLabel({
            sidePadding: 30,
            activeShape: true,
            label1: function label1(data: any) {
                return {
                    text: '￥' + data.money,
                    fill: '#343434',
                    fontWeight: 'bold',
                };
            },
            label2: function label2(data: any) {
                return {
                    text: data.type,
                    fill: '#999',
                };
            },
            onClick: function onClick(ev: any) {
                const data = ev.data;
                if (data) {
                    console.log('点击事件');
                    // document.getElementById('money').innerHTML(data.money)
                    // $('#title').text(data.type);
                    // $('#money').text(data.money);
                }
            },
        });
        chart.render();

        return () => {
            chart.clear();
            chart.destroy();
            chart = null;
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default React.memo(PieChart);
