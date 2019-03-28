import React from 'react';

export default (props) => {
    console.log(props.attributes);
    
    if (props.attributes && props.attributes['data-xvalue']) {
        console.log(props.attributes);

        const year = props.attributes['data-xvalue'].nodeValue;
        const time = props.attributes['data-yvalue'].nodeValue;
        const name = props.attributes['data-name'].nodeValue;
        const doping = props.attributes['data-doping'].nodeValue;

        const fullYear = new Date(year).getFullYear();
        const fullTime = new Date(time).getMinutes() + ":" + new Date(time).getSeconds();

        const padding = 30; // todo import
        const cx = props.attributes.cx.nodeValue; // todo import padding
        const cy = props.attributes.cy.nodeValue; // todo import padding

        const triangleWidth = 10; // todo import from styles or put in config

        const display = (props.showToolTip) ? 'block' : 'none';
        return (
            <div id="tooltip" data-year={year}
                 style={{left: Math.floor(cx) + 9 * padding + 'px',
                     top: Math.floor(cy) - 0.5 * padding + 'px',
                     position: 'absolute',
                     display: display}}
            >
                {fullYear}
                <br/>
                {name}
                <br/>
                {fullTime}
                <br/>
                {doping}
            </div>
        );
    } else {
        return (
            <div/>
        )
    }
}
