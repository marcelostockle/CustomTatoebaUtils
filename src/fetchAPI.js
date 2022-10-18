import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

const fetchAPI = async (setSentence, lang) => {
    trackPromise(
        await axios({
            method: "GET",
            url: `/.netlify/functions/tatoeba-random`,
            params: {lang},
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,ja;q=0.8",
                "x-requested-with": "XMLHttpRequest",
                "SameSite": "strict",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            mode: "cors"
        }).then(res => {
            setSentence(res.data)
            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) { return }
            console.log(e)
        })
    )
}

export default fetchAPI
