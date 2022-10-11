import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import fetchAPI from '../fetchAPI'

const WordScramble = () => {
    const defSentence = { sentence: {
        text: "Hit [Next] to start"
    }}
    const [sentence, setSentence] = useState(defSentence)
    // Home page outline
    return (
    <div>
        <Stack direction="row" spacing={2}>
            <span className="sentenceTxt">{sentence.sentence.text}</span>
            <Button
                variant="contained"
                onClick={() => fetchAPI(setSentence, "spa")}
            >Next</Button>
        </Stack>
    </div>
  );
}

export default WordScramble