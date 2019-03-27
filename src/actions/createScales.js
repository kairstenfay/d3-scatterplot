import {scaleLinear, scaleTime} from "d3-scale";
import * as d3 from "d3";
const parseYear = d3.timeParse("%Y");

const xMax   = (data)  => {
    return d3.max(data, (d) => d.Year); // d.getFullYear());
};

const xMin = (data) => {
    return d3.min(data, (d) => d.Year); // getFullYear());
};

const yMin   = (data)  => {
    return d3.min(data, (d) => d.Time); // d.getTime());
};

// Returns the highest Y coordinate from the data set
const yMax   = (data)  => {
    return d3.max(data, (d) => d.Time); // d.getTime());
};

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
    let year = props.data.map(d => d.Year.getFullYear());
    console.log(year);

    console.log("xMin = " + xMin(props.data));
    console.log("xMax = " + xMax(props.data));

    let minX = xMin(props.data);
    minX = (minX) ? parseYear(minX.getFullYear() - 1) : minX;
    

    return scaleTime()
        .domain([minX, xMax(props.data)])
        .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {

    console.log(yMin(props.data) + " to " + yMax(props.data));
    return scaleTime()
        .domain([yMin(props.data), yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

export {xScale, yScale}