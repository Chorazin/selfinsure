<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
export default {

  data() {
    return {

    }
  },


  components: {
    navbar
  }
}
</script>




<style>

</style>
