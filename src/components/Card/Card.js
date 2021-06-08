import React from 'react';
import style from './style';

export const Card = ({ job }) => {
	return (
		<div className={style.card}>
			<div className="company_name">
				<p>{job.OBJcompanyDisplay}</p>
			</div>
			<div className="job_title">
				<p>{job.OBJtitleDisplay}</p>
			</div>
			<div className="job_description">
				<p>{job.shortDesc}</p>
			</div>
		</div>
	);
};
