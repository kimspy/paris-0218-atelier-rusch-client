import React from 'react'
import { actions } from '../store.js'


const ButtonSubmitArticle = ({onPageChange}) =>
  <button onClick={() => actions.loadSubmitPage('home')}>
    SubmitArticleForm
  </button>

export default ButtonSubmitArticle
