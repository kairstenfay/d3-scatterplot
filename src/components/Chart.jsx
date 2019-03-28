import React       from 'react';
import ScatterPlot from './ScatterPlot';
import Legend from './Legend';
import '../Chart.css';
import renderToolTip from '../actions/renderToolTip';
import * as d3 from "d3";
const parseTime = d3.timeParse("%M:%S");
const parseYear = d3.timeParse("%Y");

const styles = {
    width: Math.min(window.innerWidth, 700),
    height: Math.min(window.innerHeight - 100, 400),
    padding: 40,
    showToolTip: false
};

export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.toggleToolTip = this.toggleToolTip.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

        fetch(url)
            .then(res => res.json())
            .then(jsonData => {
                console.log(jsonData);

                for (let i = 0; i < jsonData.length; i++) {
                    jsonData[i].Year = parseYear(jsonData[i].Year);
                    jsonData[i].Time = parseTime(jsonData[i].Time);
                }

                this.setState({ data: jsonData })
            })
            .catch(console.error)
    }

    toggleToolTip(e) {
        let attributes = e.target.attributes;
        console.log(attributes);

        this.setState({
            showToolTip: !this.state.showToolTip, // todo d-r-y
            toolTipSVG: (!this.state.showToolTip) ? renderToolTip(attributes) : null,
        })
    }


    render() {

        // this.state.data.map(x => console.log(x));

        return (
        <div id="chart">
            <header className="App-header">
                <h1 id="title">Doping in Professional Bicycle Racing</h1>
            </header>
            <ScatterPlot {...this.state} {...styles} toolTipAction={this.toggleToolTip} />
            <Legend />
        </div>
        )
    }
}


function toLowerCaseKeys(obj) {
    return Object.keys(obj).reduce(function(accum, key) {
        accum[key.toLowerCase()] = obj[key];
        return accum;
    }, {});
}