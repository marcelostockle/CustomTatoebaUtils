import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

const fetchPromise = async (setSentence, lang) => {
    const res = await axios({
        method: "GET",
        url: `/.netlify/functions/tatoeba-random`,
        params: {lang},
    })
    const { data } = await res
    setSentence(res.data)
    console.log(res.data)
}
const fetchAPI = (setSentence, lang) => {
    trackPromise(fetchPromise(setSentence, lang))
}

export default fetchAPI
