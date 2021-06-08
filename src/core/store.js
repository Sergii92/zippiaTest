import { createStore } from 'redux';
import { enhancedStore } from './midleware/core';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, enhancedStore);
