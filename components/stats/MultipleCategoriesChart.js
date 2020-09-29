// takes customIntervalChart as child component 
// make sure to to pass through all props customInterval would need as well

import * as React from "react";

import Chart from "./Chart";

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    componentDidMount() {
    this.sepCategories();
    }

    //Organize Categories Into Seperate Arrays within a Larger Array
    sepCategories() {
        const { data } = this.props;
        if (data) {
        const oData = [];
        const category1 = [];
        const category2 = [];
        const category3 = [];

        data.forEach((data) => {
            if (data.category == "1") {
            category1.push(data);
            }
            if (data.category == "2") {
            category2.push(data);
            }
            if (data.category == "3") {
            category3.push(data);
            }
        });

        oData.push(category1);
        oData.push(category2);
        oData.push(category3);

        this.setState((prevState) => ({
            organizedData: [...prevState.organizedData, oData],
        }));
        this.createCoordinates(oData);
        }
    }
    

}