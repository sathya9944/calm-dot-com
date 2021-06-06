import React, {useEffect} from "react";
import ApexCharts from "apexcharts";

export const BarChart = (props) => {

    const {options} = props;

    useEffect(() => {
        let chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
        chart.render();
    }, [])

    return <div id="chart-timeline"></div>
}
