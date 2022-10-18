import fetch from 'node-fetch'

export const handler = async (event, context) => {
  const {lang} = event.queryStringParameters
  const headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,ja;q=0.8",
  }
  const API_ENDPOINT = `https://tatoeba.org/en/sentences/random/${lang}`
  const response = await fetch(API_ENDPOINT, {
    method: 'get',
    headers
  })
  const res = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify({
      res
    })
  }
}