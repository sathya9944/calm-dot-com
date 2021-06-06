import {combineReducers} from 'redux';
import dashboardReducer from './dashboard'
import commonReducer from './common'
import loginReducer from './login'

const rootReducer = combineReducers({
    dashboardData: dashboardReducer,
    common: commonReducer,
    login: loginReducer
});

export default rootReducer;
