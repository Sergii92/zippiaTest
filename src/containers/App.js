import React from 'react';

import style from './style';

const App = () => {
	return (
		<React.Fragment>
			<div className={style.app}>Hello World</div>
			<button onClick={(e) => alert('Hello You!')}>Say Hello Back!</button>
		</React.Fragment>
	);
};

export default App;
