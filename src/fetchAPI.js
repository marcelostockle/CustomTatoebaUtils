import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

const fetchPromise = async (setSentence, lang) => {
    const isProduction = process.env.NODE_ENV === 'production'
    const headers = {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,ja;q=0.8",
    }
    const req = isProduction ? {
        method: "GET",
        url: "/.netlify/functions/tatoeba-random",
        params: {lang}
    } : {
        method: "GET",
        url: `/en/sentences/random/${lang}`,
        params: {},
        headers
    }
    const res = await axios(req)
    const { data } = await res
    if (isProduction) {
        setSentence(data.data)
        console.log(data.data)
    } else {
        setSentence(data)
        console.log(data)
    }
}
const fetchAPI = (setSentence, lang) => {
    trackPromise(fetchPromise(setSentence, lang))
}

export default fetchAPI
