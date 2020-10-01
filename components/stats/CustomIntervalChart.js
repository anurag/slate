//make sure to let user either set custom props or take in props from a parent
//different from live data and large data 

import * as React from "react";

import Chart from "./Chart";


//Default grid line count
const gridLineCount = 10


export default class CustomIntervalChart extends React.Component {

    intervalData = () => {
        const { data } = this.props;
        const { interval } = this.props;
        switch (interval) {
            case "day":
                return data;
            case "week":
                return data;   
            case "month":
                return data;
            case "quarter":
                return data;
            case "semi-annual":
                return data;
            case "annual":
                return data;
            case "decade":
                return data; 
            default:
                return data;
        }
    }

    render(){
        const { interval } = this.props;

        if(interval){                      
          return(
            <Chart
            data={this.intervalData()}
            gridLineCount={this.props.gridLineCount ? this.props.gridLineCount : gridLineCount}
            maxTicks={this.props.maxTicks}
            height={this.props.height}
            width={this.props.width}
            tickIncrement={this.props.tickIncrement}
        />
        )
        } else {
            return(
                <Chart
                data={this.props.data}
                gridLineCount={this.props.gridLineCount ? this.props.gridLineCount : gridLineCount}
                maxTicks={this.props.maxTicks}
                height={this.props.height}
                width={this.props.width}
                tickIncrement={this.props.tickIncrement}
            />
            )
        }
    }
}