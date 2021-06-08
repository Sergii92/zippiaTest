import { combineReducers } from 'redux';
import { jobsReducer as jobs } from '../reducers/reducer';
export const rootReducer = combineReducers({ jobs });
