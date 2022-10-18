import fetch from 'node-fetch'

export const handler = async (event, context) => {
  const {lang, headers} = event.queryStringParameters
  const API_ENDPOINT = `https://tatoeba.org/en/sentences/random/${lang}`
  const response = await fetch(API_ENDPOINT, {
    method: 'get',
    headers
  })
  const res = await response.json()
  const data = res.data

  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  }
}