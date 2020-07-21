<template>
<div class="row my-3">
    <div class="col-12">
        <div class="card">
            <h5 class="card-header">Activities</h5>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-for="(activity, i) in activities" v-bind:key="i">{{ activity }}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'Activities',
  data: function() {
    return store.state
  }
}
</script>