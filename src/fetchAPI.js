import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'

export default function fetchAPI(setSentence, lang) {
    trackPromise(
        axios({
            method: "GET",
            url: `/.netlify/functions/tatoeba-random/${lang}`,
            params: {},
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