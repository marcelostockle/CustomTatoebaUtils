import React, {useState} from 'react'
import Stack from '@mui/material/Stack';
import LangFlag from './langFlag';
import ControlRow from './controlRow'
import './wordScramble.css'

const WordScramble = () => {
    const defSentence = { sentence: {
        text: "Hit [Next] to start",
        lang: "unknown",
        translations: [[]]
    }}
    const [sentence, setSentence] = useState(defSentence)
    // Home page outline
    return (
        <div className="wordScramble">
            <Stack direction="column" alignItems="flex-start">
                <ControlRow setSentence={setSentence}/>
                <Stack direction="row">
                    <LangFlag lang={sentence.sentence.lang}/>
                    <h2 className="mainSentence">{sentence.sentence.text}</h2>
                </Stack>
                {sentence.sentence.translations[0].map(tSentence =>
                    <Stack key={`s${tSentence.id}`} direction="row">
                        <LangFlag lang={tSentence.lang}/>
                        <h4 className="tSentence">{tSentence.text}</h4>
                    </Stack>
                )}
            </Stack>
        </div>
    )
}

export default WordScramble