import React from 'react'
import Markdown from 'markdown-to-jsx'

const Repository = (props) => {
  return (
    <div>
      <Markdown>{props.text}</Markdown>
    </div>
  )
}

export default Repository
