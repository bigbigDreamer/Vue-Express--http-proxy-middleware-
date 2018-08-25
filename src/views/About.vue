<template>
    <div>
      <router-link to="/about/msg">
        Msg
      </router-link>
      <input type="text">
      <router-view>
        
      </router-view>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
