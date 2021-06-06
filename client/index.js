import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';

window.addEventListener('DOMContentLoaded', () => {
	ReactDOM.hydrate(<App />, document.getElementById('ssr-app'));
});
