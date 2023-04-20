import axios from "axios"

export async function handler(event) {
    const API_KEY = process.env.API_KEY
    const options = {
        method: 'GET',
        url: 'https://keto-diet.p.rapidapi.com/',
        params: event.queryStringParameters,
        headers: {
          'X-RapidAPI-Key': `${API_KEY}`,
          'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
        }
    }

    try {
        const {data} = await axios.request(options)

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: error.toJSON()
        }
    }
}