import React  from 'react';
import Axis   from './Axis';

export default (props) => {
    const xSettings = {
        translate: `translate(0, ${props.height - props.padding})`,
        scale: props.xScale,
        orient: 'bottom',
        id: 'x-axis',
        axisTitle: props.xAxisTitle
    };
    const ySettings = {
        translate: `translate(${props.padding}, 0)`,
        scale: props.yScale,
        orient: 'left',
        id: 'y-axis',
        axisTitle: props.yAxisTitle
    };
    return (
        <g className="xy-axis">
            <Axis {...xSettings} {...props.styles} />
                <text className="axis-title" transform="rotate(-90)" dy="1em"
                      style={{textAnchor: 'middle'}}
                      y={0}
                      x={0 - props.height / 2}>
                    {props.yAxisTitle}
                </text>
            <Axis {...ySettings} {...props.styles} />
        </g>
    )
}