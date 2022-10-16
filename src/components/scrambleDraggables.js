import React from 'react'
import { MidContent } from '../regex_expressions'
import shuffle from 'knuth-shuffle-seeded'
import './wordScramble.css'

const ScrambleDraggables = (props) => {
  const { sentence, index, activeRow, setNewQuery } = props
  const split = shuffle(sentence.text.split(/\s/), sentence.id)
  const styles = {
    display: "flex"
  }
  return (
    <div
      className="draggablesTop"
      style={activeRow === index ? styles : {}}
    >
      {
        split.map((word, i) => {
          const content = word.match(MidContent).toString().toLowerCase()
          return (
          <span
            key={`d${sentence.id}-${i}`}
            className="draggable"
            onClick={() => setNewQuery({content, index})}>
            {content}
          </span>)
        })
      }
    </div>
  )
}

export default ScrambleDraggables