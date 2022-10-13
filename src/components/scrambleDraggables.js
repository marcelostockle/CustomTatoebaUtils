import React from 'react'
import { MidContent } from '../regex_expressions'
import './wordScramble.css'

const ScrambleDraggables = (props) => {
  const { sentence } = props
  const split = sentence.text
    .toLowerCase()
    .split(/\s/)
    .sort(() => Math.random() - 0.5)
  return (
    <div className="draggablesTop">
      {
        split.map((word, index) => {
          return (<span key={`d${sentence.id}-${index}`} className="draggable">
            {word.match(MidContent)}
          </span>)
        })
      }
    </div>
  )
}

export default ScrambleDraggables