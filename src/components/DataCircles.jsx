import React from 'react';

export default function DataCircles(props) {

    return (
        <g id="circle-garden" onMouseOver={props.toolTipAction} onMouseOut={props.toolTipAction}>
            {props.data.map(renderCircles(props))}
            {props.toolTipSVG}
        </g>
    );
}

function renderCircles(props) {
    return (coords, index) => {

        const circleProps = {
            cx: props.xScale(coords.Year),
            cy: props.yScale(coords.Time),
            r: 5,
            key: index,
        };

        const fillColor = (coords.Doping === "") ? 'blue': 'red';  // todo config
        
        return <circle className="dot" data-xvalue={coords.Year}
                       data-yvalue={coords.Time}  // todo: {...coords}
                       {...circleProps} fill={fillColor} />;
    };
}



