<template>
<transition name="slideLeft">


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
        <button class="button is-small is-info is-uppercase has-text-weight-bold" @click="$emit('toggle')">settings</button>
      </div>
      
    </div>
    <!-- /.level -->
    
  </div>
  </transition>
</template>

<script>
  
  export default {
    props: {
      pressure: {
        type: Number
      },
      flow: {
        type: Number
      },
    },

    data() {
      return {
        //
      }
    },



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/animation-variables.scss";
   .dropdown-trigger {
     max-width: 20px;
   }

   #display-settings {
     animation-duration: $animate-duration;
   }
</style>