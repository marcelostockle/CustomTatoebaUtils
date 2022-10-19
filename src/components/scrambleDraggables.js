import React, {useEffect, useState} from 'react'
import { MidContent } from '../regex_expressions'
import shuffle from 'knuth-shuffle-seeded'
import './wordScramble.css'

const ScrambleDraggables = (props) => {
  const { sentence, index, activeRow, newQuery, setNewQuery } = props
  const split = shuffle(sentence.text.split(/\s/), sentence.id)
  const [activeCells, setActiveCells] = useState(Array(split.length).fill(false))
  // react to CLEAR command
  useEffect(() => {
    if (Object.keys(newQuery).length === 0) {
      setActiveCells(Array(split.length).fill(false))
    }
  }, [newQuery])
  
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
          const handleClick = () => {
            setNewQuery({content, index, remove: activeCells[i]})
            setActiveCells(activeCells.map(
              (cell, j) => i === j ? !cell : cell)
            )
          }
          return (
          <span
            key={`d${sentence.id}-${i}`}
            className={activeCells[i] ? "draggable highlight" : "draggable"}
            onClick={() => handleClick()}>
            {content}
          </span>)
        })
      }
    </div>
  )
}

export default ScrambleDraggables