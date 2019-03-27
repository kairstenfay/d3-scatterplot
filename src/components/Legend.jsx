import React from 'react';

export default function Legend(props) {

    return (

        <div id="legend">
            Legend
            <br />
            <span id="doping" className="legend-dot" /> = Doping accusation
            <br />
            <span id="clean" className="legend-dot" /> = Clean record (no doping)


        </div>
    );
}


{/*<g id="legend" >*/}
{/*<rect x="200" y="200" width="200" height="200" /> */}
{/*<text>Legend</text>*/}
{/*</g>*/}
