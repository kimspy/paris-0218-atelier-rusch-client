import React from 'react'
import LabBlock from './LabBlock.js'

const Homepage = (props) => {
  const articles = props.articles.filter(article => article.section === 'lab').map(article =>
    <LabBlock key={article.id} article={article} />
  )
  return (
    <div>
      {articles}
    </div>
  )
}

export default Homepage
