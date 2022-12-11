<template>
    <div>
        <div id="navigation-links">
            <span class="nav-link">
                <router-link v-bind:to="{name: 'StateList'}">Home</router-link><!--using the name for a route for navigation is more flexible. In case URL changes, only router/index.js needs to be modified-->
            </span><!--'to' attribute attaches a path to a link in the page-->
            
            <span class="nav-link">
                <router-link v-bind:to="{name: 'AboutSite'}">About this site</router-link>
            </span>
            
            <label>Header image by 
                <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrislawton on Unsplash</a>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageFooter'
}



</script>

<style scoped>
.nav-link {
    margin: 1rem; /*rem size is relative to the font size. Scale better depending on page size*/
}
</style>



















