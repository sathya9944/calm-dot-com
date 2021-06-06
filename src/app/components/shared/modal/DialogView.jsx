import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    font: {
        fontSize: '1.2rem',
    },
    divider: {
        padding: '3rem 5rem',
    },

}));

export const DialogView = (props) => {
    const {onClose, onConfirm, title, description, openModal} = props;

    const classes = useStyles();
    const render = () => {
        return (
            <Dialog disableBackdropClick disableEscapeKeyDown maxWidth='sm' open={openModal} className={classes.font}>
                <DialogTitle id='confirmation-dialog-title'>{title}</DialogTitle>
                <DialogContent dividers className={classes.divider}>{description}</DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => onClose()} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={() => onConfirm()} color='primary'>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return <React.Fragment>{render()}</React.Fragment>;
};

export default DialogView;
