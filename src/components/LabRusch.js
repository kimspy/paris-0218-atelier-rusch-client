import React from 'react'
import Article from './Article.js'
import ButtonSubmitArticle from './ButtonSubmitArticle.js'

const LabRusch = (props) => {
  const articles = props.articles.filter(article => article.section === 'lab').map(article =>
    <Article key={article.id} article={article} />
  )
  return (
    <div>
      {articles}
      <ButtonSubmitArticle />
    </div>
  )
}

export default LabRusch
