// unfinished/src/components/data-circles.jsx
import React from 'react';
import * as d3 from "d3";
const parseTime = d3.timeParse("%M:%S");
const formatTime = d3.timeFormat("%M:%S");
const parseYear = d3.timeParse("%Y");

export default function DataCircles(props) {  // todo make function if this tooltip thing doesn't work out

    return (
        <g id="circle-garden" onMouseOver={props.toolTipAction} onMouseOut={props.toolTipAction}>
            {props.data.map(renderCircles(props))}
            {/*{props.toolTipSVG}*/}
        </g>
    );
}

function renderCircles(props) {
    return (coords, index) => {
        // console.log(formatTime(coords.Time));
        console.log(props.xScale(coords.Year));

        const circleProps = {
            cx: props.xScale(parseYear(coords.Year)),  // todo stop parsing all over. do it once
            cy: props.yScale(parseTime(coords.Time)),
            r: 2,
            key: index,
        };

        const fillColor = 'grey';  // todo config

        return <circle className="dot" data-xvalue={parseYear(coords.Year)}
                       data-yvalue={parseTime(coords.Time)}
                       {...circleProps} fill={fillColor} />;
    };
}

