<template>
    <div class="card" style="width: 15rem;">
        <div class="card-body">
            <img :src="require('@/assets/img/' + pic + '.jpg')" class="card-img-top">
            <h5 class="card-title mt-4">{{ title }}</h5>
            <p class="card-text">You could earn between {{ min }} and {{ max }} golds</p>
            <a href="#" class="btn btn-outline-dark" @click="increase">Find gold!</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
      title: String,
      pic: String,
      min: Number,
      max: Number
  },
  methods: {
      increase: function(ev){
          ev.preventDefault();
          const Random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
          const date = new Date();
          const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit', hour12: true};
          const time =  date.toLocaleDateString("en-US", options);
          const textlist = `You earn ${Random} total golds from the ${this.title}, ${time}`;
          this.$store.commit("increase", Random);
          this.$store.commit("addActivity", {text: textlist, value: Random})
      }
  }
}
</script>