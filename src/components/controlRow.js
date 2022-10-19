import React, {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import fetchAPI from '../fetchAPI'
import langList from '../langList.json'
import LoadingLabel from './loadingLabel';
import './controlRow.css'

const ControlRow = (props) => {
  const { setSentence, setActiveRow, setNewQuery } = props
  const [lang, setLang] = useState('und')
  const handleSelectChange = (event) => {
    setLang(event.target.value);
  }
  return (
    <div className="control-row">
      <LoadingLabel/>
      <div className="lang-select">
        <InputLabel>Age</InputLabel>
        <Select
          value={lang}
          label="Language"
          onChange={handleSelectChange}
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
      <span
        className="control-row-btn"
        onClick={() => setNewQuery({})}
      >Clear</span>
      <span
        className="control-row-btn"
        onClick={() => {
          fetchAPI(setSentence, lang)
          setActiveRow(-1)
          setNewQuery({})
        }}
      >Next</span>
    </div>
  )
}

export default ControlRow