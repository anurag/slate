//make sure to let user either set custom props or take in props from a parent
//different from live data and large data 

import * as React from "react";

import Chart from "./Chart";

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render(){
        return(
            <Chart
            data={data}
            gridLineCount={gridLineCount}
            showTicks={showT}
            maxTicks={tickNumber}
            height={height}
            width={width}
        />
        )
    }
}