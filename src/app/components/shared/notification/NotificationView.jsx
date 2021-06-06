import Snackbar from '@material-ui/core/Snackbar';
import {makeStyles} from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    snackbar: {
        top: '80%',
        left: '89%',
        width: '20%',
    },
    font: {
        fontSize: '15px',
        fontWeight: 'bolder',
    },
    alert: {
        width: '100%',
    },
}));

export const Notification = (props) => {
    const classes = useStyles();
    const {message, variant, open, onClose} = props;

    return (
        <div className={classes.root}>
            <Snackbar className={classes.snackbar} autoHideDuration={5000} open={open} onClose={onClose}>
                <Alert severity={variant} className={classes.alert} onClose={onClose}>
                    <div className={classes.font}>{message}</div>
                </Alert>
            </Snackbar>
        </div>
    );
};
