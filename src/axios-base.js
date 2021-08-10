import Axios from 'axios'

const instance = Axios.create({
    baseURL: "https://bookaha-api.herokuapp.com",
    headers: { 
        'Accept': 'application/json',
      'Content-Type': 'application/json', 
      'X-Authorization': 'Oix1Xh0gOFreXmQlL4JPJWcDsnvo3La4LDXm9q4OCiSxV9XhYk7ziYcMIj1ctbci',
      },
});


export default instance