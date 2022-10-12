import React, {useState} from 'react'
import Stack from '@mui/material/Stack';
import LangFlag from './langFlag';
import ControlRow from './controlRow'
import { Info } from '@mui/icons-material'
import './wordScrambleMain.css'

const WordScrambleMain = () => {
    const defSentence = { sentence: {
        text: "Hit [Next] to start",
        lang: "unknown",
        id: 0,
        translations: [[]]
    }}
    const [sentence, setSentence] = useState(defSentence)
    // Component outline
    return (
        <div className="wordScrambleMain">
            <Stack direction="column" alignItems="flex-start" width="inherit">
                <ControlRow setSentence={setSentence}/>
                <Stack direction="row">
                    <a href={`https://tatoeba.org/en/sentences/show/${sentence.sentence.id}`}
                        style={{display: "flex", alignItems: "center"}}>
                        <Info color="action"/>
                    </a>
                    <LangFlag lang={sentence.sentence.lang}/>
                    <h2 className="mainSentence">{sentence.sentence.text}</h2>
                </Stack>
                {sentence.sentence.translations[0].map(tSentence =>
                    <Stack key={`s${tSentence.id}`} direction="row">
                        <a href={`https://tatoeba.org/en/sentences/show/${tSentence.id}`}
                            style={{display: "flex", alignItems: "center"}}>
                            <Info color="action"/>
                        </a>
                        <LangFlag lang={tSentence.lang}/>
                        <h4 className="tSentence">{tSentence.text}</h4>
                    </Stack>
                )}
            </Stack>
        </div>
    )
}

export default WordScrambleMain