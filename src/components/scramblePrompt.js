import React from 'react'
import { PrefixSymbols, SuffixSymbols, MidContent } from '../regex_expressions'
import './wordScramble.css'

const ScramblePrompt = (props) => {
  const { sentence, index, setActiveRow } = props
  const split = sentence.text.split(/\s/)
  return (
    <span 
      style={{display: "flex", flexWrap: "wrap"}}
      onClick={() => setActiveRow(index)}
    >
    {
      split.map(word => {
        const prefix = word.match(PrefixSymbols)
        const suffix = word.match(SuffixSymbols)
        const content = word.match(MidContent)
        return (
          <span className="draggableCell">
            <input type="hidden" value={content}/>
            {prefix}
            <span className="inlineBlank"/>
            {suffix}
          </span>
        )
      })
    }
    </span>
  )
}

export default ScramblePrompt