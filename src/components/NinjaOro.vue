<template>
  <div class="container">
    <Score />
    <NinjaCards />
    <Activities />
    <Reset />
  </div>
</template>

<script>
import NinjaCards from '@/components/NinjaCards.vue'
import Score from '@/components/Score.vue'
import Activities from '@/components/Activities.vue'
import Reset from '@/components/Reset.vue'
import store from '@/store.js'

export default {
  name: 'NinjaOro',
  data() {
    return store.state
  },
  components: {
    NinjaCards,
    Score,
    Activities,
    Reset
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin: auto;
  padding: 10px;
  width: 1080px;
}
</style>
