import fetch from 'node-fetch'

export const handler = async (event, context) => {
  console.log("event:", event)
  console.log("context:",context)
  const API_ENDPOINT = 'https://tatoeba.org/en/sentences/random/spa'
  const response = await fetch(API_ENDPOINT)
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  }
}