import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        minWidth: '70px',
        margin: '10px'
    },
    active: {
        background: '#27a3c3'
    }
}));

const SplineChart = (props) => {
    const {options, series} = props;
    const [selection, setSelection] = useState('six_months');
    const classes = useStyles();

    const updateData = (timeline) => {
        setSelection(timeline);
        switch (timeline) {
            case "one_month":
                ApexCharts.exec(
                    "area-datetime",
                    "zoomX",
                    new Date("28 Jan 2013").getTime(),
                    new Date("27 Feb 2013").getTime()
                );
                break;
            case "three_months":
                ApexCharts.exec(
                    "area-datetime",
                    "zoomX",
                    new Date("27 Sep 2012").getTime(),
                    new Date("27 Nov 2012").getTime()
                );
                break;
            case "six_months":
                ApexCharts.exec(
                    "area-datetime",
                    "zoomX",
                    new Date("27 Sep 2012").getTime(),
                    new Date("27 Feb 2013").getTime()
                );
                break;
            default:
        }
    }

    return (
        <div id="chart">
            <div className="toolbar">
                <button id="one_month" onClick={() => updateData("one_month")}
                        className={selection === "one_month" ?
                            `active ${classes.buttonStyle} ${classes.active}` : `${classes.buttonStyle}`}> 1M
                </button>
                &nbsp;
                <button id="three_months" onClick={() => updateData("three_months")}
                        className={selection === "three_months" ?
                            `${classes.buttonStyle} ${classes.active}` : `${classes.buttonStyle}`}> 3M
                </button>
                &nbsp;
                <button id="six_months" onClick={() => updateData("six_months")}
                        className={selection === "six_months" ?
                            `active ${classes.buttonStyle} ${classes.active}` : `${classes.buttonStyle}`}> 6M
                </button>
            </div>

            <div id="chart-timeline">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="area"
                    height={350}
                />
            </div>
        </div>
    );
}

export default SplineChart;
