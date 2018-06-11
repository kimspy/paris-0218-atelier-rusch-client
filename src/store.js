import { createStore } from 'redux'

const initialState = {
  pageActive: 'home',
  articles: [],
  data: [],
}

const reducer = (state, action) => {
  // action = { type: 'LOAD_ARTICLES', articles: articles }

  if (action.type === 'LOAD_ARTICLES') {
    return {
      ...state,
      articles: action.articles
    }
  }
  if (action.type === 'LOAD_SUBMIT_PAGE') {
    return {
      ...state,
      pageActive: action.pageActive
    }
  }

  return state
}

export const store = createStore(reducer, initialState)

export const actions = {
  loadArticles: articles => store.dispatch({ type: 'LOAD_ARTICLES', articles: articles }),
  loadSubmitPage: pageActive =>store.dispatch({ type: 'LOAD_SUBMIT_PAGE', pageActive: pageActive })
}

fetch(`http://localhost:3456/articles`)
  .then(result => result.json())
  .then(articles => {
    console.log(articles)
    actions.loadArticles(articles)
  })
  .catch(console.error)
