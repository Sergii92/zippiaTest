import moment from 'moment';

export const lastSevenDaysPablished = (jobs) => {
	const dateSevenDaysAgo = moment().subtract(7, 'days').format();
	return jobs.filter((job) => job.OBJpostingDate >= dateSevenDaysAgo);
};

export const filterByCompanyName = (jobs, value) => {
	return jobs.filter((job) => job.companyName.toLowerCase().includes(value.toLowerCase()));
};
