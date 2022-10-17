import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import fetchAPI from '../fetchAPI'
import langList from '../langList.json'
import LoadingLabel from './loadingLabel';

const ControlRow = (props) => {
  const { setSentence, setActiveRow, setNewQuery } = props
  const [lang, setLang] = useState('und')
  const handleChange = (event) => {
    setLang(event.target.value);
  }
  return (
    <Stack direction="row" justifyContent="flex-end" width="inherit" paddingBottom="0.4rem">
      <LoadingLabel/>
      <div className="lang-select">
        <InputLabel>Age</InputLabel>
        <Select
          value={lang}
          label="Language"
          onChange={handleChange}
        >
          {
            Object.entries(langList)
              .map((entry, index) => { return (
                <MenuItem key={`item${index}`} value={entry[0]}>
                  {entry[1]}
                </MenuItem>
                )
              })
          }
        </Select>
      </div>
      <Button
        variant="contained"
        sx={{m:"auto 0"}}
        onClick={() => {
          fetchAPI(setSentence, lang)
          setActiveRow(-1)
          setNewQuery({})
        }}
      >Next</Button>
    </Stack>
  )
}

export default ControlRow