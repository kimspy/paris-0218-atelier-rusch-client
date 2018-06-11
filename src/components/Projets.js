import React from 'react'
import LabBlock from './LabBlock.js'

const Projets = (props) => {
  const articles = props.articles.filter(article => article.section === 'project').map(article =>
    <LabBlock key={article.id} article={article} />
  )
  return (
    <div>
      {articles}
    </div>
  )
}

export default Projets
