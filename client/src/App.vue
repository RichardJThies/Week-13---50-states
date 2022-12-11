<template>
  <div><!--encasing component listed in template with div will remove error underline-->
    <page-header></page-header><!--can use camal case, but kebab case is the standard-->
    
    <router-view></router-view><!--uses index.js to figure out component to display. vue-router is looking browser URL and matching components with that URL-->
    
    <page-footer></page-footer>
</div>
</template>

<script>

import PageHeader from '@/components/PageHeader.vue'//pull in PageHeader components
import PageFooter from './components/PageFooter.vue'//pull in PageFooter components
import StateList from './components/StateList.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    StateList
  },
  // mounted(){//not a method, called life cycle(?) hooks in Vue
  //   this.$stateService.getAllStates().then(states => console.log(states))
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
