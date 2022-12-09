import axios from 'axios'//code that mnakes requests to the API server

export default {//exporting methods that will be used by the rest of the app
    getAllStates(){
        return axios.get('/api/states').then(response => {
            return response.data//returns a list of state objects
        })
    }
}