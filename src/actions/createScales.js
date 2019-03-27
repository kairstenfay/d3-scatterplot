import {scaleLinear, scaleTime} from "d3-scale";
import * as d3 from "d3";
const parseTime = d3.timeParse("%M:%S");
const parseYear = d3.timeParse("%Y");
const formatTime = d3.timeFormat("%M:%S");

const xMax   = (data)  => {
    return d3.max(data, (d) => parseYear(d.Year)); // d.getFullYear());
};

const xMin = (data) => {
    return d3.min(data, (d) => parseYear(d.Year)); // getFullYear());
};

const yMin   = (data)  => {
    return d3.min(data, (d) => parseTime(d.Time)); // d.getTime());
};

// Returns the highest Y coordinate from the data set
const yMax   = (data)  => {
    return d3.max(data, (d) => parseTime(d.Time)); // d.getTime());
};

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
    let year = props.data.map(d => parseYear(d.Year.toString()));

    return scaleTime()
        .domain([xMin(props.data), xMax(props.data)])
        .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
    let time = props.data.map(d => parseTime(d.Time));

    console.log(yMin(time) + " to " + yMax(time));
    return scaleTime()
        .domain([yMin(props.data), yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

export {xScale, yScale}