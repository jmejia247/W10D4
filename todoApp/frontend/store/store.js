import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = function() {
    return createStore(rootReducer);
}

// dispatch invokes reducer with action
// reducer uses action and state to update store and returns redux state

export default configureStore;