<!--component is in change of displaying nsg below header in homepage about # of states visited-->
<template>
    <div>
        <div>
            <label>There are {{states.length}} States (including D.C.)</label>
            <br>
            <label>You have visited {{totalVisited}} {{units}}</label>
            <br>
            <label id="all-visited-message" v-if="areAllVisited">You have visited all the states and Washington, D.C.!</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StateSummary',
    props: {
        states: Array
    } ,
    computed: {
        totalVisited() {
            let visitedCount = 0
            this.states.forEach(state => {
                if(state.visited) {
                    visitedCount++
                }
            })
            return visitedCount
        },
        units() {//this will change the display to account for grammer of 1 or plural states. If not states are selected, it will also be plural
            if(this.totalVisited == 1) {//totalVisited is referred to without ()
                return 'state'
            } else {
                return 'states'
            }
        },
        areAllVisited() {
            return this.totalVisited === this.states.length//if all states have been selected, it will be true, and will return true value
        }
    }  
}
</script>

<style>
#all-visited-message {
    color: red;
    font-weight: 600;
}
</style>