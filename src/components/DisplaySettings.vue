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
        <button class="button is-small is-info is-uppercase has-text-weight-bold" @click="toggleMenu">info</button>
      </div>
      <div class="level-item">
        <button class="button is-small is-warning is-uppercase has-text-weight-bold" @click="$emit('reset')">
          change flow
        </button>
      </div>
    </div>
    <!-- /.level -->
    <sidebar v-show="showMenu" @toggle="toggleMenu"/>
  </div>
  </transition>
</template>

<script>
  import Sidebar from './Sidebar.vue';
  export default {
    components: {
      Sidebar
    },
    // name: 'DisplaySettings',
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
        showMenu : false
      }
    },

    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
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