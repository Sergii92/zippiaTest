import { TYPES } from './types';
import { lastSevenDaysPablished, filterByCompanyName } from './helpers/helpers';
const initialState = {
	jobsList: []
};

export const jobsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TYPES.SET_ALL_JOBS:
			return {
				...state,
				jobsList: payload
			};
		case TYPES.SET_JOBS_PABLISHD_LAST_7_DAY:
			return {
				...state,
				jobsList: lastSevenDaysPablished(state.jobsList)
			};
		case TYPES.SEARCH_BY_COMPANY_NAME: {
			return {
				...state,
				jobsList: filterByCompanyName(state.jobsList, payload)
			};
		}
		default:
			return state;
	}
};
