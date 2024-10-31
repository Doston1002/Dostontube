import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': 'ab12fa5a0dmsh78f42e2188a3f52p139cd4jsne9777998dcaa',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      }
  };



  export const ApiService = {
    async fetching(url){
const response = await axios.get(`${BASE_URL}/${url}`, options)
return response.data
    }
  }