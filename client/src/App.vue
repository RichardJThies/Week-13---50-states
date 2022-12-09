<template>
  
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  mounted(){//not a method, called life cycle(?) hooks in Vue
    this.$stateService.getAllStates().then(states => console.log(states))
  }
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
