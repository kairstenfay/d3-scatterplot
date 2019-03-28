import React from 'react';

export default function renderToolTip(attributes) {
    if (attributes && attributes['data-xvalue']) {
        console.log(attributes);

        const year = attributes['data-xvalue'].nodeValue;
        const time = attributes['data-yvalue'].nodeValue;

        const fullYear = new Date(year).getFullYear();
        const fullTime = new Date(time).getMinutes() + ":" + new Date(time).getSeconds();

        const cx = attributes.cx.nodeValue; // todo import padding
        const cy = attributes.cy.nodeValue + 90; // todo import padding

        const triangleWidth = 10; // todo import from styles or put in config

        const polygonPoints = `${cx - triangleWidth},${cy - triangleWidth} 
                               ${cx},${cy - 1}
                               ${cx + triangleWidth},${cy - triangleWidth}`;

        const rectangleWidth = 170;  // todo config file
        const rectangleHeight = 40;  // todo same here
        return (

            <g>
                <rect x={cx - triangleWidth - 0.5 * rectangleWidth}
                      y={cy - triangleWidth - rectangleHeight}
                      width={rectangleWidth} height={rectangleHeight}
                      fill="black" />
                <text id="tooltip" className="date-tooltip-text" data-year={year} fill="white"
                      x={cx - 0.5 * rectangleWidth} y={cy - 30}>
                    {fullYear}
                </text>
                <text className="gdp-tooltip-text" fill="white"
                      x={cx - 0.5 * rectangleWidth} y={cy - 15}>
                    {attributes.getNamedItem('Name')}
                </text>
                <text className="gdp-tooltip-text" fill="white"
                      x={cx - 0.5 * rectangleWidth} y={cy - 15}>
                    {fullTime}
                </text>
                <polygon points={polygonPoints} />

            </g>
        );
    }
}
