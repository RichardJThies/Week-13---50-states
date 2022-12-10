<template>
    <div id="block-header">
        <h1 id="title">Have you visited every state?</h1>
    </div>
</template>

<script>
export default {
    name: 'Pageheader'//all components need names, often named after the file
}

</script>

<style scoped>
#block-header {
    padding: 2rem 1rem;/*padding is the setting that makes it the correct size*/
    margin-bottom: 2rem;
    border-radius: .3rem;
    background-color: aliceblue;
    background-image: url('~@/assets/map_header.jpg');
    background-position: center;
    background-size: cover;
}

#title {
    color: indianred;
}


</style>


