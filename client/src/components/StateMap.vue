<!--displays map/information about any state-->
<template>
    <div class="state-map">
        <h2>The State of {{state.name}}</h2>

        <label v-if="state.visited">You have visited this state</label>
        <label v-else>You have not visited this state yet</label>

        <!--map here-->
        <div id="map-container" v-if="dataReady"><!--mapCenter() computed property is trying to activate before API call. 'v-if' ensures API call return takes precedence-->
            <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom"><!--uses state data to set map center and zoom level-->
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
                state: {},
                dataReady: false,//tracks if the data is ready for display after API call completes
                mapReady: false//tracks if the leaflet map is ready for display after loading
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
                    this.dataReady = true//API call is completed, set data as ready for map
                }).catch(err => {//catch if user manually changes the state name in the URL
                    //accounting for '404 not found'
                    if(err.response && err.response.status === 404) {
                        this.state.name = '?'// TODO find better way to tell user
                    } else {
                    //'500 server' error called
                        alert('Sorry, error fetching data about this state')
                        console.error(err)//users will see alert, developer will see console error
                    }
                    
                })
            },
            onMapReady() {
                this.mapReady = true//listens for l-map component to send'v-on:ready' event. If sent, set to true
            },
            setMapView() {
                if(this.mapReady && this.dataReady) {
                    //TODO make map show correct place and zoom
                    this.$refs.map.leafletObject.setView(this.mapCenter, this. zoom)//when refering to mapCenter, you refer to it as a property, dropping the ()
                }
            }
        },
        computed: {
            mapCenter() {
                return [this.state.lat, this.state.lon]
            }
        }
    }
</script>

<style scoped>
#map-container {
    height: 30rem;
}
</style>