import fetch from 'node-fetch'

export const handler = async (event, context) => {
  const API_ENDPOINT = `https://tatoeba.org/en/sentences/random/${event.params.lang}`
  const response = await fetch(API_ENDPOINT)
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  }
}