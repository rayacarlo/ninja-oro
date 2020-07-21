<template>
  <div class="row my-3">
    <div class="col-12">
        <div class="card">
            <h5 class="card-header">Your Gold</h5>
            <div class="card-body">
              <h5>{{ gold }}</h5>
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