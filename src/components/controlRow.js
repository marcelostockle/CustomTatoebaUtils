import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import fetchAPI from '../fetchAPI'

const ControlRow = (props) => {
  return (
    <Stack direction="row">
      <Button
        variant="contained"
        onClick={() => fetchAPI(props.setSentence, "spa")}
      >Next</Button>
    </Stack>
  )
}

export default ControlRow