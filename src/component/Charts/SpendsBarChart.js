import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class SpendsBarChart extends Component {
  componentDidMount() {

    am4core.addLicense("CH258896422");

    am4core.useTheme(am4themes_animated);
    // Create chart instance

    let chart = am4core.create("overview-spends", am4charts.XYChart);

  // Add percent sign to all numbers
  chart.numberFormatter.numberFormat = "#.#'%'";

// Add data
chart.data = [{
"year": "2016",
"targeted": 4.2,
"achived": 3.5
}, {
"year": "2017",
"targeted": 3.1,
"achived": 3.9
}, {
"year": "2018",
"targeted": 3.5,
"achived": 3.1
}, {
"year": "2019",
"targeted": 3.9,
"achived": 2.5
}, {
"year": "2020",
"targeted": 3.5,
"achived": 2.8
}, {
"year": "2021",
"targeted": 4.2,
"achived": 4.8
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.fontWeight = 800;
valueAxis.renderer.labels.template.disabled = true;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "targeted";
series.dataFields.categoryX = "year";
series.clustered = false;
series.tooltipText = "Growth in {categoryX} (targeted): [bold]{valueY}[/]";
series.fill = am4core.color("#022a52");
series.stroke = am4core.color("#022a52");

let series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "achived";
series2.dataFields.categoryX = "year";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Growth in {categoryX} (achived): [bold]{valueY}[/]";
series2.fill = am4core.color("#cc1906");
series2.stroke = am4core.color("#cc1906");



chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

valueAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.grid.template.disabled = true;

this.chart = chart;

}

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div>
                  <div id="overview-spends" style={{ width: "100%" }} />
            </div>
        )
    }
}

