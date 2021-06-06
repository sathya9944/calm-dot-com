import React, {useEffect} from 'react';
import {LoginView} from '../components/login/LoginView'

import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import history from "../history";
import {useSelector} from 'react-redux';
import {getUserType} from "../redux/selectors/login";
import HeaderView from "../components/header/HeaderView";
import {DashboardView} from "../components/dashboard/DashboardView";

export const Navigation = (props) => {

    const loggedInUser = useSelector(getUserType);

    useEffect(() => {
        if (!loggedInUser || loggedInUser === '') {
            history.push("/login");
        }
    }, [loggedInUser]);

    return (
        <Router history={history} basename="/">
            <Switch>
                <Route path="/login">
                    <LoginView/>
                </Route>
                <Route path="/dashboard">
                    <><HeaderView loggedInUser={loggedInUser}/><DashboardView/></>
                </Route>
                <Redirect to="/login"/>
            </Switch>
        </Router>
    );
};

