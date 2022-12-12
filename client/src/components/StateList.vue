<!--this component is in charge of getting the other components-->
<template>
    <div>
        <div>
            <state-summary v-bind:states="states"></state-summary><!--sends StateSummary states Array for a prop-->
        </div>

        <div class="state-list-container">
            <div class="state-container" v-for="state in states" v-bind:key="state.name"><!--"v-bind:key" removes warning/error. It assigns a unique value for each individual object in the v-for label.-->
                <state-detail 
                v-bind:state="state"
                v-on:update-visited="updateVisited"></state-detail><!--v-bind state prop to the state objects in array-->        <!--^^Makes it much more efficent to reorder objects while^^-->
            </div>                                                                                                               <!--^^loaded in the browser?^^-->
        </div>
    </div>
</template>

<script>
import StateDetail from './StateDetail.vue'
import StateSummary from './StateSummary.vue'

export default {
    components: {//this was added automatically by state-detail in vid, so there was no comment about it. Child component?
        StateDetail,
        StateSummary
        },
    name: 'StateList',
    data() {
        return {
            states: []
        }
    },
//     mounted(){//not a method, called life cycle(?) hooks in Vue
//         this.$stateService.getAllStates().then(states => console.log(states))
//   }
    mounted(){
        this.fetchAllStates()//calling the method
    },
    methods: {//if the need to fetch all states multiple times arises, it's better to have the code in method format
        fetchAllStates() {
            this.$stateService.getAllStates().then(states => {
                this.states = states//sets the data (states array) equal to the JSON that's returned from te request to get all states
            })
            .catch(err => {
                alert('Sorry, can\'t fetch state list')
                console.error(err)//user can't do anything for errors in db or server. Just send msg and log for developer
            })
        },
        updateVisited(stateName, visited) {//method receives name of the state, and true/false status from StateDetail event
            this.$stateService.setVisited(stateName, visited).then(() => {//API call to setVisited function in stateService.js. Receives 'ok'/200 code back, not new data
                this.fetchAllStates()//if 'ok', updates data with new true/false value
            })
            .catch(err => {
                alert('Sorry, can\'t update state')
                console.error(err)//user can't do anything for errors in db or server. Just send msg and log for developer
            })
        }
    }
}
</script>

<style scoped>
.state-list-container {
    display: flex; /* Flexbox styling*/
    flex-wrap: wrap;/*puts components on a line, which will go down the page*/
    justify-content: space-evenly;
}

.state-container {
    margin: 1rem
}
</style>