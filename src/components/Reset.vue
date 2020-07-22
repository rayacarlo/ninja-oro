<template>
  <div class="row my-3">
    <div class="col-3"></div>
    <div class="col-6">
        <div class="card">
            <a href="#" class="btn btn-outline-dark" @click="reset">Reset</a>
        </div>
    </div>
    <div class="col-3"></div>
</div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'Reset',
  methods: {
    reset: function(ev){
      ev.preventDefault;
      if (window.confirm("Do you really want to reset?")) { 
        store.resetAll();
      }
    }
  }
}
</script>