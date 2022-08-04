// import React, { useState, useEffect, useRef } from 'react';
// import F2 from '@antv/f2';

// // 柱状图
// export interface LineChartProps {
//     data: any;
//     padding?: any;
//     width?: any;
//     height?: any;
// }

// const LineChart: React.FC<LineChartProps> = (props) => {
//     const { data, padding, width, height } = props;

//     let canvasRef = useRef<HTMLCanvasElement>(null);

//     useEffect(() => {
//         let chart: any =
//             canvasRef.current !== null &&
//             new F2.Chart({
//                 el: canvasRef.current,
//                 pixelRatio: window.devicePixelRatio,
//                 padding,
//                 width,
//                 height,
//             });

//         chart.source(data, {
//             y: {
//                 tickCount: 5,
//                 min: 0,
//             },
//             x: {
//                 type: 'timeCat',
//                 range: [0, 1],
//                 tickCount: 3,
//             },
//         });
//         chart.tooltip({
//             custom: true,
//             showXTip: true,
//             showYTip: true,
//             snap: true,
//             crosshairsType: 'xy',
//             crosshairsStyle: {
//                 lineDash: [2],
//             },
//         });
//         chart.axis('x', {
//             label: function label(text: string, index: number, total: any) {
//                 const textCfg = { textAlign: '' };
//                 if (index === 0) {
//                     textCfg.textAlign = 'left';
//                 } else if (index === total - 1) {
//                     textCfg.textAlign = 'right';
//                 }
//                 return textCfg;
//             },
//         });
//         chart.line().position('x*y');
//         chart.render();

//         return () => {
//             chart.clear();
//             chart.destroy();
//             chart = null;
//         };
//     }, []);

//     return <canvas ref={canvasRef}></canvas>;
// };

// export default LineChart
