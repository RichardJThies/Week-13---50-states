import axios from 'axios'//code that mnakes requests to the API server

export default {//exporting methods that will be used by the rest of the app
    getAllStates(){
        return axios.get('/api/states').then(response => {
            return response.data//returns a list of state objects
        })
    },
    setVisited(stateName, visited) {//setVisited needs to know two things: which state was visited (stateName) and was the state visited or not (visited, which is the boolean) 
        let requestData = {visited: visited}
        return axios.patch('/api/States/' + stateName, requestData).then(response => {//request to api for something like '/api/States/Iowa'
            return response.data//'.data' received is the 'ok' string from state.js, which is status code 200 (success)
        })
    },

    getOneState(stateName){
        return axios.get('/api/state/' + stateName).then( response => {//plain get request, no data will be sent back
            return response.data
        })
    }
}