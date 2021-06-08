import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../core/store';
import { MainPage } from '../pages/MainPage';

const App = () => {
	return (
		<Provider store={store}>
			<MainPage />
		</Provider>
	);
};

export default App;
