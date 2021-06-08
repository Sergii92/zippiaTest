import React from 'react';
import style from './style';
import mainStyle from '../../asets/styles/style.less';
import Logo from '../../asets/img/logo.png';

export const Header = () => {
	return (
		<div className={style.header}>
			<div className={mainStyle.container}>
				<div className={style.logo} />
			</div>
		</div>
	);
};
