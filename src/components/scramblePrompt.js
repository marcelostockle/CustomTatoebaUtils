import React from 'react'
import { PrefixSymbols, SuffixSymbols, MidContent } from '../regex_expressions'
import './wordScramble.css'

const ScramblePrompt = (props) => {
  const split = props.sentence.text.split(/\s/)
  return (
    <span style={{display: "flex", flexWrap: "wrap"}}>
      {
        split.map(word => {
          const prefix = word.match(PrefixSymbols)
          const suffix = word.match(SuffixSymbols)
          const content = word.match(MidContent)
          return (
            <span>
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