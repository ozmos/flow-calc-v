<template>

  <div class="card-content is-paddingless" id="display-settings">
    <div class="level is-mobile p-2">
      <div class="level-item">
        <span class="has-text-weight-bold is-block">{{ flow }}</span> <span class="has-text-grey is-block ml-1">l/pm</span>

      </div>
      |
      <div class="level-item">
        <span class="has-text-weight-bold is-block">{{ pressure }}</span> <span class="has-text-grey is-block ml-1">kpa</span>
      </div>
      |
      <div class="level-item">
        <button class="button is-small is-warning is-uppercase has-text-weight-bold" @click="$emit('reset')">
          change flow
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    // name: 'DisplaySettings',
    props: {
      pressure: {
        type: Number
      },
      flow: {
        type: Number
      },
    },



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>