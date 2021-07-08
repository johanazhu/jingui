import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import F2 from '@antv/f2';


export interface ChartProps {
    config: any;
}


const Chart = forwardRef((props: any, ref) => {


    let canvasRef = useRef<HTMLCanvasElement>(null)


    return (
        <canvas ref={canvasRef}></canvas>
    )
})


export default React.memo(Chart);