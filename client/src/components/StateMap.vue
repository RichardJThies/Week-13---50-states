<!--displays map/information about any state-->
<template>
    <div class="state-map">
        <h2>The State of {{state.name}}</h2>

        <label v-if="state.visited">You have visited this state</label>
        <label v-else>You have not visited this state yet</label>

        <!--map here-->
        <div id="map-container">
            <l-map v-bind:center="mapCenter" v-bind:zoom="state.zoom"><!--uses state data to set map center and zoom level-->
                <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors">
                </l-tile-layer>
            </l-map>
        </div>
    </div>
</template>
    
<script>
    import {LMap, LTileLayer} from '@vue-leaflet/vue-leaflet'
    export default {//Will not receive props from a parent. Will be created and added to page by vue-router via navigation to /map/'whatever state'
        name: 'StateMap',
        components: {
            LMap, 
            LTileLayer
        },
        data() {
            return {   
                state: {}
            }
        },
        mounted() {//lifecycle hook
            this.state.name = this.$route.params.state//$route is a global property from vue-router. "this.$route.params.state" is ":state" from StateMap route in index.js, the name of the state
            this.fetchStateData()//make a request to fetch state data
        },
        methods: {
            fetchStateData() {
                this.$stateService.getOneState(this.state.name).then(state => {
                    this.state = state//overwrites the state data in data() with response from API
                })
            }
        }
    }
</script>

<style scoped>
#map-container {
    height: 30rem;
}
</style>