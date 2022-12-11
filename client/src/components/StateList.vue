<!--this component is in charge of getting the other components-->
<template>
    <div class="state-list-container">
        <div class="state-container" v-for="state in states" v-bind:key="state.name"><!--"v-bind:key" removes warning/error. It assigns a unique value for each individual object in the v-for label. Makes it much more efficent-->
            <state-detail v-bind:state="state"></state-detail><!--v-bind state prop to the state objects in array--><!--to reorder objects while loaded in the browser?-->
        </div>
    </div>
</template>

<script>
import StateDetail from './StateDetail.vue'

export default {
    components: {StateDetail},//this was added automatically by state-detail in vid, so there was no comment about it. Child component?
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


















