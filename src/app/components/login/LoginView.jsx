import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import logo from "../../assets/img.png";
import {useHistory} from 'react-router-dom';
import {ADMIN, USER} from "../../constants";
import {useDispatch} from 'react-redux';
import {loginSuccess} from "../../redux/slices/login";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'rgb(0, 17, 33)'
    },
}));

export const LoginView = () => {
    const classes = useStyles();
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onLogin = () => {
        if (userName === ADMIN && password === ADMIN) {
            history.push("/dashboard");
            dispatch(loginSuccess(ADMIN));
        }
        if (userName === USER && password === USER) {
            history.push("/dashboard");
            dispatch(loginSuccess(USER));
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <img src={logo} className={classes.large}>
                </img>
                <form className={classes.form} noValidate onSubmit={() => history.push('/organisations')}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth id="email"
                                       label="Email Address" name="email" autoComplete="email"
                                       onChange={(e) => setUserName(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth name="password" label="Password"
                                       type="password" id="password" autoComplete="current-password"
                                       onChange={(e) => setPassword(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="secondary"
                            className={classes.submit} onClick={onLogin}> Login </Button>
                </form>
            </div>
        </Container>
    );
}

export default LoginView;
