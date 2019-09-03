<template>
    <div id="myDiv">
        <h2>今天是一个好日子！</h2>
    </div>
</template>

<script>

    export default {
        name: "MY",
        props: {
            msg: String
        }

    }
</script>

<style scoped>
    h2{
        color: red;
    }
</style>