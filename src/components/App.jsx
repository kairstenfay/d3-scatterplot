import React       from 'react';
import ScatterPlot from './ScatterPlot';
import Legend from './Legend';
import '../App.css';
import Tooltip from '../components/Tooltip';
import * as d3 from "d3";
const parseTime = d3.timeParse("%M:%S");
const parseYear = d3.timeParse("%Y");

const styles = {
    width: Math.min(window.innerWidth, 700),
    height: Math.min(window.innerHeight - 100, 550),
    padding: 60,
};

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            styles: styles,
            data: [],
            xAxisTitle: 'Year',
            yAxisTitle: 'Time (minutes)',
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

                for (let i = 0; i < jsonData.length; i++) {
                    jsonData[i].Year = parseYear(jsonData[i].Year);
                    jsonData[i].Time = parseTime(jsonData[i].Time);
                }

                this.setState({ data: jsonData })
            })
            .catch(console.error)
    }

    toggleToolTip(e) {
        this.setState({
            attributes: e.target.attributes,
            showToolTip: !this.state.showToolTip, // todo d-r-y
        })
    }


    render() {

        return (
        <div id="App">
            <header className="App-header">
                <h1 id="title">Doping in Professional Bicycle Racing</h1>
                <h2>35 Fastest times up Alpe d'Huez</h2>
            </header>
            <div id="chart">
                <ScatterPlot {...this.state} {...styles} toolTipAction={this.toggleToolTip} />
                <Legend />
            </div>
            <Tooltip attributes={this.state.attributes} showToolTip={this.state.showToolTip} {...styles} />
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