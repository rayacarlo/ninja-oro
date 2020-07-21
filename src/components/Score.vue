<template>
  <div class="row my-3">
    <div class="col-12">
        <div class="card">
            <h4 class="card-header">Your Gold</h4>
            <div class="card-body">
              <h4>{{ gold }}</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'Score',
    data() {
      return store.state
    }
  }
</script>