<template>
    <div>
     <router-link to="/about">
       About
     </router-link>
     <router-link to="/home">
       Home
     </router-link>

    </div>
</template>

<script>
  import About from '../views/About'
  import Home from '../views/Home'
    export default {
        name: "Router",
      components:{
          About,
        Home
      }
    }
</script>

<style scoped>

</style>
