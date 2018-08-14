import {combineReducers} from 'redux';
import {NewsReducer} from '../screens/news/newsReducer';

//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
//And also communication between the reducers will be easier to maintain.

const reducer = combineReducers({
  news: NewsReducer
})

/* export default rootReducer*/
export default {
  reducer
};