<template>
<div class="row my-3">
    <div class="col-12">
        <div class="card">
            <h5 class="card-header">Activities</h5>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-bind:class="{ 'text-success' : activity.value > 0, 'text-danger' : activity.value < 0 }" v-for="(activity, i) in activities" v-bind:key="i">{{ activity.text }}
                  <span class="close" @click="removeElement(i)">x</span></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Activities',
  data: function() {
    return this.$store.state
  },
  methods: {
  removeElement(i) {
    this.activities.splice(i, 1);
  }
}
}
</script>

<style scoped>
.close {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0%;
  padding: 12px 16px;
  transform: translate(0%, -50%);
}

.close:hover {background: #bbb;}
</style>