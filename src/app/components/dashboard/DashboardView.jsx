import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TimelineChart from "../shared/timeline-chart";
import SplineChart from "../shared/spline-chart";
import Card from "../shared/card";
import {Box, Typography} from "@material-ui/core";
import {
    ADMIN_SPLINE_DASHBOARD_DATA,
    ADMIN_SPLINE_DASHBOARD_OPTIONS,
    ADMIN_TIMELINE_DASHBOARD_DATA,
    ADMIN_TIMELINE_DASHBOARD_OPTIONS,
    USER_BAR_OPTIONS
} from "../../constants/MockData";
import {BarChart} from "../shared/bar-chart";
import {useSelector} from "react-redux";
import {getUserType} from "../../redux/selectors/login";
import {ADMIN, USER} from "../../constants";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(6)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const DashboardView = () => {
    const classes = useStyles();
    const loggedInUser = useSelector(getUserType);

    return <div className={classes.content}>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card/>
            </Grid>
            <Grid item xs={8}>
                {loggedInUser === ADMIN && <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <Box fontWeight="fontWeightBold" fontFamily="Monospace">
                            Count of the Depressed
                        </Box>
                    </Typography>
                    <TimelineChart options={ADMIN_TIMELINE_DASHBOARD_OPTIONS()}
                                   series={ADMIN_TIMELINE_DASHBOARD_DATA}/></Paper>}

                {loggedInUser === USER && <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <Box fontWeight="fontWeightBold" fontFamily="Monospace">
                            Statistics of your Data
                        </Box>
                    </Typography>
                    <BarChart options={USER_BAR_OPTIONS}/></Paper>}
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}> <Typography component="h1" variant="h5">
                    <Box fontWeight="fontWeightBold" fontFamily="Monospace">
                        Overall Emotional Balance
                    </Box>
                </Typography><SplineChart options={ADMIN_SPLINE_DASHBOARD_OPTIONS}
                                          series={ADMIN_SPLINE_DASHBOARD_DATA}/></Paper>
            </Grid>
        </Grid>
    </div>
}
