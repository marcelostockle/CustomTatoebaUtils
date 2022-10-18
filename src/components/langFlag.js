import React from 'react'
import './langFlag.css'

const LangFlag = (props) => {
  return <img 
    className="langFlag"
    src={`https://tatoeba.org/img/flags/${props.lang}.svg`}
    alt={props.lang}/>
}

export default LangFlag