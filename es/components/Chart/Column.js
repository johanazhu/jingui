// import React, { useState, useEffect, useRef } from 'react';
// // import F2 from '@antv/f2';

// // 柱状图
// export interface ColumnChartProps {
//     data: any;
//     padding?: any;
//     width?: any;
//     height?: any;
// }

// const ColumnChart: React.FC<ColumnChartProps> = (props) => {
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
//             sales: {
//                 tickCount: 5,
//             },
//         });
//         chart.tooltip({
//             showItemMarker: false,
//             onShow: function onShow(ev: any) {
//                 const items = ev.items;
//                 items[0].name = null;
//                 items[0].name = items[0].title;
//                 items[0].value = '¥ ' + items[0].value;
//             },
//         });
//         chart.interval().position('x*y');
//         chart.render();

//         return () => {
//             chart.clear();
//             chart.destroy();
//             chart = null;
//         };
//     }, []);

//     return <canvas ref={canvasRef}></canvas>;
// };

// export default ColumnChart