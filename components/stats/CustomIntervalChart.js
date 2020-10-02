//make sure to let user either set custom props or take in props from a parent
//different from live data and large data 

import * as React from "react";

import Chart from "./Chart";


//Default grid line count
const gridLineCount = 10

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  let newData = [
    { id: 1, date: randomDate(new Date(2018, 0, 1), new Date()), category: "1", value: getRandomInt(1000) },
    { id: 2, date: randomDate(new Date(2018, 0, 1), new Date()), category: "1", value: getRandomInt(1000) },
    { id: 4, date: randomDate(new Date(2019, 0, 1), new Date()), category: "1", value: getRandomInt(1000) },
    { id: 3, date: randomDate(new Date(2019, 0, 1), new Date()), category: "1", value: getRandomInt(1000) },
    { id: 5, date: randomDate(new Date(2019, 0, 1), new Date()), category: "1", value: getRandomInt(1000) },
    { id: 6, date: randomDate(new Date(2019, 0, 1), new Date()), category: "1", value: getRandomInt(1000) },
    { id: 7, date: randomDate(new Date(2020, 0, 1), new Date()), category: "2", value: getRandomInt(1000) },
    { id: 8, date: randomDate(new Date(2020, 0, 1), new Date()), category: "2", value: getRandomInt(1000) },
    { id: 9, date: randomDate(new Date(2020, 5, 1), new Date()), category: "2", value: getRandomInt(1000) },
    { id: 10, date: randomDate(new Date(2020, 6, 1), new Date()), category: "2", value: getRandomInt(1000) },
    { id: 11, date: randomDate(new Date(2020, 9, 1), new Date()), category: "3", value: getRandomInt(1000) },
    { id: 12, date: randomDate(new Date(2020, 9, 1), new Date()), category: "3", value: getRandomInt(1000) },
    { id: 13, date: randomDate(new Date(2020, 9, 1), new Date()), category: "3", value: getRandomInt(1000) },
    { id: 14, date: randomDate(new Date(2020, 10, 1), new Date()), category: "3", value: getRandomInt(1000) },
  ];


export default class CustomIntervalChart extends React.Component {

    intervalData = () => {
        const { data } = this.props;
        const { interval } = this.props;
        const today = new Date();
        let incrementData = []
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
                //incrementData.push(this.newData);
                const newNewData = newData.filter(obj => obj.date.getFullYear() >= new Date().getFullYear())
                console.log(newData[0].date.getFullYear())
                return newNewData;
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