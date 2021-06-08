import { TYPES } from './types';

export const jobsActions = {
	setAllJobs: (jobs) => ({
		type: TYPES.SET_ALL_JOBS,
		payload: jobs
	})
};
