<template>
  <div class="row">
    <div class="col-3">
      <Cards title="Farm" pic="farm" :min="10" :max="20"/>
    </div>
    <div class="col-3">
      <Cards title="Cave" pic="cave" :min="5" :max="10"/>
    </div>
    <div class="col-3">
      <Cards title="House" pic="house" :min="2" :max="5"/>
    </div>
    <div class="col-3">
      <Cards title="Casino" pic="casino" :min="-50" :max="50"/>
    </div>
  </div>  
</template>

<script>
  import Cards from '@/components/Cards.vue'

  export default {
  name: 'NinjaCards',
  components: {
    Cards
  }
}
</script>