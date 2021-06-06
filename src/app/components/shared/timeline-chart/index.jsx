import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";
import DialogView from "../modal/DialogView";
import {showModelTimeline} from "../../../redux/slices/dashboard";
import {useDispatch, useSelector} from "react-redux";
import {showModelTimeLine} from "../../../redux/selectors/dashboard";
import {Notification} from "../notification/NotificationView";

export const renderModel = (dispatch, showModel, showNotification, setShowNotification) => {

    return <div>
        <DialogView
            onClose={() => dispatch(showModelTimeline(false))}
            onConfirm={() => {
                setShowNotification(true);
                dispatch(showModelTimeline(false));
            }}
            title={"Confirmation"}
            description={"Would you like to notify unhappy persons to take a break?"}
            openModal={showModel}
        />
    </div>;
}

const TimelineChart = (props) => {
    const {options, series} = props;
    const showModel = useSelector(showModelTimeLine);
    const [showNotification, setShowNotification] = useState(false);
    const dispatch = useDispatch();

    const renderNotification = () => (
        <Notification
            message={"Notified Successfully"}
            variant={"success"}
            open={showNotification}
            onClose={() => setShowNotification(false)}
        />
    );

    return (
        <div>
            {showNotification && renderNotification()}
            {showModel && renderModel(dispatch, showModel, showNotification, setShowNotification)}
            <div id="chart"><ReactApexChart options={options} series={series} type="rangeBar" height={350}/></div>
        </div>
    );
}

export default TimelineChart;
