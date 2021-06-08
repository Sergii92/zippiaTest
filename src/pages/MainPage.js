import React from 'react';
import style from './style';
import mainStyle from '../asets/styles/style.less';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';

export const MainPage = () => {
	return (
		<div className={mainStyle.wrapper}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};
