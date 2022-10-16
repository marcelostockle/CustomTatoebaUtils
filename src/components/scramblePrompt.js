import React, {useEffect, useState} from 'react'
import { PrefixSymbols, SuffixSymbols, MidContent } from '../regex_expressions'
import './wordScramble.css'

const ScramblePrompt = (props) => {
  const { sentence, index, setActiveRow, newQuery } = props
  const split = sentence.text.split(/\s/)
  const [nextEmpty, setNextEmpty] = useState(0)
  const [content, setContent] = useState(Array(split.length).fill('____'))
  
  useEffect(() => {
    if (newQuery && newQuery.index === index) {
      setContent(content.map((entry, i) => 
        i === nextEmpty ? newQuery.content : entry
      ))
      setNextEmpty(nextEmpty + 1)
    } if (!newQuery) {
      setContent(Array(split.length).fill('____'))
    }
  }, [newQuery])
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