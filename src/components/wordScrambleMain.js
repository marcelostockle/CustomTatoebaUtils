import React, {useState} from 'react'
import Stack from '@mui/material/Stack';
import LangFlag from './langFlag';
import ControlRow from './controlRow'
import { Info } from '@mui/icons-material'
import ScramblePrompt from './scramblePrompt';
import ScrambleDraggables from './scrambleDraggables';
import './wordScramble.css'

const WordScrambleMain = () => {
    const defSentence = { sentence: {
        text: "Hit [Next] to start",
        lang: "unknown",
        id: 0,
        translations: [[]]
    }}
    const [sentence, setSentence] = useState(defSentence)
    const [activeRow, setActiveRow] = useState(-1)
    // Component outline
    return (
        <div className="wordScrambleMain">
            <Stack direction="column" alignItems="flex-start" width="inherit">
                <ControlRow setSentence={setSentence} setActiveRow={setActiveRow}/>
                <div className="mainSentenceRow">
                    <a href={`https://tatoeba.org/en/sentences/show/${sentence.sentence.id}`}
                        className="info-cell">
                        <Info color="action" paddingLeft="0.3rem"/>
                    </a>
                    <LangFlag lang={sentence.sentence.lang}/>
                    <h2 className="mainSentence">{sentence.sentence.text}</h2>
                </div>
                {sentence.sentence.translations[0].map((tSentence, tInd) =>
                    <Stack key={`s${tSentence.id}`} direction="column" width="inherit">
                        <div className="translationRow">
                            <a href={`https://tatoeba.org/en/sentences/show/${tSentence.id}`}
                                className="info-cell">
                                <Info color="action"/>
                            </a>
                            <LangFlag lang={tSentence.lang}/>
                            <ScramblePrompt
                                sentence={tSentence}
                                index={tInd}
                                setActiveRow={setActiveRow}
                            />
                        </div>
                        <ScrambleDraggables
                            sentence={tSentence}
                            index={tInd}
                            activeRow={activeRow}
                        />
                    </Stack>
                )}
            </Stack>
        </div>
    )
}

export default WordScrambleMain