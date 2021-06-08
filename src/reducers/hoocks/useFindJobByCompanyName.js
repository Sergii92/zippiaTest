import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { jobsActions } from '../actions';
import { API_URL } from '../../constants/api';
import { filterByCompanyName } from '../helpers/helpers';

export const useFindJobByCompanyName = () => {
	const dispatch = useDispatch();

	const getAllByJobsCompanyName = useCallback(
		async (value) => {
			try {
				const res = await fetch(`${API_URL}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						companySkills: true,
						dismissedListingHashes: [],
						fetchJobDesc: true,
						jobTitle: 'Business Analyst',
						locations: [],
						numJobs: 20,
						previousListingHashes: []
					}),
					mode: 'cors'
				});
				if (res.status !== 200) {
					throw new Error(res.status);
				}
				const data = await res.json();
				dispatch(jobsActions.setAllJobs(filterByCompanyName(data.jobs, value)));
			} catch (e) {
				console.log(e);
			}
		},
		[ dispatch ]
	);
	return { getAllByJobsCompanyName };
};
