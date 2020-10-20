import Axios from 'axios'

const instance = Axios.create({
    baseURL: "https://bookaha-api.herokuapp.com/website-forms",
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',  
      },
});


export default instance