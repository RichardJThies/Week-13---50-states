<template>
    <div class="state-info">

        <span class="state-name">{{state.name}}</span>
        
        <div>
            <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged"><!--v-model connects to the visited data, v-on calls method to react when button is checkbox interacted with-->
        </div>

        <div>
            <!--This router link navigates to /map/"whatever state"/-->
            <router-link v-bind:to="{name: 'StateMap', params: {state: state.name}}">
                <img class="map-icon" src="@/assets/map_icon.png">
            </router-link><!--'v-bind:to' dynamically links based on state being called. "name: 'StateMap'" is the path being pulled from index.js, uses params to generate the correct URL, as-->
                                                                                                                                                            <!--state.name is the state prop below-->
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'StateDetail',
        emits: ['update-visited'],
        props: {
            state: Object
        },
        data() {//connects checkbox in template
            return {
                visited: this.state.visited//'.visited' is taken from the state object
            }
        },
        methods: {
            visitedChanged() {
                this.$emit('update-visited', this.state.name, this.visited)//send event to parent compoenent (StateList) 
            }
        }
    }
</script>

<style scoped>
.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px gainsboro solid;
    border-radius: .3rem;
    background-color: whitesmoke;
}

.visit-state {
    margin: 1rem;
    text-align: center;/*keep this style so this component has control rather that app.vue centering*/
}

.map-icon {
    width: 2rem;
    height: 2rem;
}
</style>









