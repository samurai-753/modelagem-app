import sessionReducer from "./Reducers/sessionReducer";
import { createStore, combineReducers } from 'redux';

export const reducers = combineReducers({
    session: sessionReducer,
});

const configureStore = () => {
    return createStore(reducers);
}
  
export default configureStore;