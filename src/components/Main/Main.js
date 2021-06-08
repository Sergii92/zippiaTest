import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllJobs } from '../../reducers/hoocks/useGetJobs';
import { useFindJobByCompanyName } from '../../reducers/hoocks/useFindJobByCompanyName';
import { useLastSevenDayPablished } from '../../reducers/hoocks/useLastSevenDayPablished';

import style from './style';
import mainStyle from '../../asets/styles/style.less';
import { selectJobs } from '../../reducers/selectors';
import { Card } from '../Card/Card';

export const Main = () => {
	const { getAllJobs } = useGetAllJobs();
	const { getAllByJobsCompanyName } = useFindJobByCompanyName();
	const { getLastSevenDayPablishedJobs } = useLastSevenDayPablished();

	const [ searchValue, setSearchValue ] = useState('');

	useEffect(() => {
		getAllJobs();
	}, []);

	const handleLastPablished = () => {
		getLastSevenDayPablishedJobs();
	};

	const onHandleChange = (e) => {
		setSearchValue(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		getAllByJobsCompanyName(searchValue);
		setSearchValue('');
	};

	const jobList = useSelector(selectJobs);

	return (
		<div className={style.main}>
			<div className={style.section}>
				<div className={mainStyle.container}>
					<h1>Developer Jobs</h1>
				</div>
			</div>

			<div className={style.section}>
				<div className={mainStyle.container}>
					<h2>DEVELOPER JOBS NEAR ME Developer</h2>
					<div className={style.button_block}>
						<form onSubmit={handleSearch}>
							<input placeholder="Search" onChange={onHandleChange} value={searchValue} />
							<button onClick={handleSearch}>Search by company name</button>
						</form>

						<button onClick={handleLastPablished}>Published last 7 days</button>
					</div>
					<div className={style.card_block}>{jobList.map((job) => <Card key={job.jobId} job={job} />)}</div>
				</div>
			</div>
		</div>
	);
};
