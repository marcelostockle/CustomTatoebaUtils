import React, {useState} from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew'; 
import { usePromiseTracker } from "react-promise-tracker";
import './loadingLabel.css'

const LoadingLabel = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
    <span className="loading-label-top">
      <AutorenewIcon/>
      <span style={{marginLeft:"0.3rem"}}>Loading...</span>
    </span>
  )
}

export default LoadingLabel