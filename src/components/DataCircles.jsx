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
        console.log(parseTime(coords.Time));

        const circleProps = {
            cx: props.xScale(coords.Year),  // todo
            cy: props.yScale(coords.Time),
            r: 2,
            key: index,
        };

        const fillColor = (props.dataDate === coords[0]) ? '#ff8282' : 'grey';  // todo config

        return <circle className="bar" data-date={coords[0]} data-gdp={coords[1]} {...circleProps} fill={fillColor} />;
    };
}

