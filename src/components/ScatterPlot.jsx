import React        from 'react';
import DataCircles  from './DataCircles';
import XYAxis from './XYAxis';
import {xScale, yScale} from '../actions/createScales';

export default (props) => {
    const scales = {
        xScale: xScale(props),
        yScale: yScale(props)
    };

    return (
        <svg width={props.width} height={props.height} >
            <DataCircles {...props} {...scales} />
            <XYAxis {...props} {...scales} />
        </svg>
    )
}

