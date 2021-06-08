import React from 'react';
import style from './style';
import mainStyle from '../../asets/styles/style.less';

export const Header = () => {
	return (
		<div className={style.header}>
			<div className={mainStyle.container}>
				<div className={style.logo} />
			</div>
		</div>
	);
};
