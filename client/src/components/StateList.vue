<!--this component is in charge of getting the other components-->
<template>
    <div>
        <label v-for="state in states" v-bind:key="state.name"><!--"v-bind:key" removes warning/error. It assigns a unique value for each individual object in the v-for label. Makes it much more efficent to-->
            {{state.name}}                                          <!--reorder objects while loaded in the browser?-->
        </label>
    </div>
</template>

<script>
export default {
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

</style>


















