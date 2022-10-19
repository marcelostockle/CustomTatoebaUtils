import React, {useEffect, useState} from 'react'
import { PrefixSymbols, SuffixSymbols, MidContent } from '../regex_expressions'
import './wordScramble.css'

const ScramblePrompt = (props) => {
  const emptyCell = '____'
  const { sentence, index, setActiveRow, newQuery } = props
  const split = sentence.text.split(/\s/)
  const [nextEmpty, setNextEmpty] = useState(0)
  const [content, setContent] = useState(Array(split.length).fill(emptyCell))
  const [mask, setMask] = useState(true)
  
  // React to new input from ScrambleDraggables
  useEffect(() => {
    if (Object.keys(newQuery).length > 0) {
      if (newQuery.index === index) {
        // Replace single cell content (replace / remove)
        const replaceInd = newQuery.remove ?
          content.findLastIndex((entry) => entry === newQuery.content) : nextEmpty
        const replaceContent = newQuery.remove ? emptyCell : newQuery.content
        setContent(content.map((entry, i) => 
          i === replaceInd ? replaceContent : entry
        ))
      }
    } else {
      // Empty query: empty all cells
      console.log("I'm doing my job")
      setContent(Array(split.length).fill(emptyCell))
    }
  }, [newQuery])

  // React to updated cell content
  useEffect(() => {
    setNextEmpty(content.findIndex((entry) => entry === emptyCell))
  }, [content])

  // Verify if all cells are ready
  useEffect(() => {
    if (nextEmpty === -1) {
      // Finding nextEmpty cell operation failed -> All cells are ready
      setMask(false)
    } else {
      setMask(true)
    }
  }, [nextEmpty])

  return (
    <span 
      style={{display: "flex", flexWrap: "wrap"}}
      onClick={() => setActiveRow(index)}
    >
    {
      split.map((word, i) => {
        const prefix = word.match(PrefixSymbols)
        const suffix = word.match(SuffixSymbols)
        const solution = word.match(MidContent).toString().toLowerCase()
        const jointClass = [
          "inline-blank",
          mask ? "hide-solution" : "show-solution",
          solution === content[i] ? "correct" : "incorrect"
        ].join(' ')
        return (
          <span key={`cell-${index}-${i}`} className="target-cell">
            {prefix}
            <span className={jointClass}>{content[i]}</span>
            {suffix}
          </span>
        )
      })
    }
    </span>
  )
}

export default ScramblePrompt