export async function handler(event) {
    const {query, value} = event.queryStringParameters
    const url = `https://keto-diet.p.rapidapi.com/?${query}=${value}`
    const API_KEY = process.env.API_KEY
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${API_KEY}`,
          'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
        }
    }

    try {
        const res = await fetch(url, options)
        const data = await res.json()

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}