<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {
      this.$router.beforeEach((to, from, next) => {
        next()
      })
    }
  }
</script>
