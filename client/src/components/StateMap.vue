<!--displays map/information about any state-->
<template>
    <div class="state-map">
        <h2>The State of {{state.name}}</h2>

        <label v-if="state.visited">You have visited this state</label>
        <label v-else>You have not visited this state yet</label>

        <!--TODO map here-->
    </div>
</template>
    
<script>
    export default {//Will not receive props from a parent. Will be created and added to page by vue-router via navigation to /map/'whatever state'
        name: 'StateMap',
        data() {
            return {   
                state: {}
            }
        },
        mounted() {//lifecycle hook
            this.state.name = this.$route.params.state//$route is a global property from vue-router. "this.$route.params.state" is ":state" from StateMap route in index.js, the name of the state
        }
    }
</script>

<style scoped>

</style>












