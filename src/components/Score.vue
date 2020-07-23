<template>
  <div class="row my-3">
    <div class="col-12">
        <div class="card">
            <h5 class="card-header">Your Gold</h5>
            <div class="card-body">
              <h5 v-bind:class="{ 'text-success' : gold > 0, 'text-danger' : gold < 0 }">{{ gold }}</h5>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'Score',
    data: function() {
      return store.state
    }
  }
</script>