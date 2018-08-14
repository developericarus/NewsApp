import * as newsActions from './actions'
import _ from 'lodash';

const initialState = {
  newsSource: [],
  newsData: [],
  query: "",
  source: '',
  page: 1,
  loading: true,
  pagination: true,

};

export function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case newsActions.FETCH_NEWS_LIST: {
      return _.assign( {}, state, { newsData: _.uniqBy(_.concat(state.newsData, action.news),'title') });
    }
    case newsActions.EMPTY_NEWS_LIST: {
      return _.assign( {}, state, { newsData: [] });
    }
    case newsActions.FETCH_SOURCE_LIST: {
        console.log("dddd",action)
      return _.assign( {}, state, { newsSource: action.sources });
    }
    case newsActions.EMPTY_SOURCE_LIST: {
      return _.assign( {}, state, { newsSource: [] });
    }
    case newsActions.UPDATE_SOURCE: {
      return _.assign( {}, state, { source: action.source, page: action.page });
    }
    case newsActions.UPDATE_QUERY: {
      return _.assign( {}, state, { query: action.query, page: action.page });
    }
    case newsActions.UPDATE_PAGE: {
      return _.assign( {}, state, { page: action.page });
    }
    case newsActions.UPDATE_LOADING: {
      return _.assign( {}, state, { loading: action.loading });
    }
    case newsActions.UPDATE_PAGINATION: {
      return _.assign( {}, state, { pagination: action.pagination });
    }
    default:
      return state
  }
}