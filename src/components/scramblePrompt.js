import React, {useEffect, useState} from 'react'
import { PrefixSymbols, SuffixSymbols, MidContent } from '../regex_expressions'
import './wordScramble.css'

const ScramblePrompt = (props) => {
  const emptyCell = '____'
  const { sentence, index, setActiveRow, newQuery } = props
  const split = sentence.text.split(/\s/)
  const [nextEmpty, setNextEmpty] = useState(0)
  const [content, setContent] = useState(Array(split.length).fill(emptyCell))
  
  useEffect(() => {
    if (newQuery && newQuery.index === index) {
      const replaceInd = newQuery.remove ?
        content.findLastIndex((entry) => entry === newQuery.content) : nextEmpty
      const replaceContent = newQuery.remove ? emptyCell : newQuery.content
      console.log(replaceInd, replaceContent)
      setContent(content.map((entry, i) => 
        i === replaceInd ? replaceContent : entry
      ))
    } if (!newQuery) {
      setContent(Array(split.length).fill(emptyCell))
    }
  }, [newQuery])

  useEffect(() => {
    setNextEmpty(content.findIndex((entry) => entry === emptyCell))
  }, [content])

  return (
    <span 
      style={{display: "flex", flexWrap: "wrap"}}
      onClick={() => setActiveRow(index)}
    >
    {
      split.map((word, index) => {
        const prefix = word.match(PrefixSymbols)
        const suffix = word.match(SuffixSymbols)
        const solution = word.match(MidContent).toString().toLowerCase()
        return (
          <span className="target-cell">
            <input type="hidden" value={solution}/>
            {prefix}
            <span className="inlineBlank">{content[index]}</span>
            {suffix}
          </span>
        )
      })
    }
    </span>
  )
}

export default ScramblePrompt