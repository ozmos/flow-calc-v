<template>
<transition name="slideLeft">
  <aside id="sidebar" class="is-overlay has-background-white is-active box">
    <!-- <span class="is-size-3 is-pulled-right has-line-height-1" aria-label="close" @click="$emit('toggle')">&#10005;</span> -->
    <article class="block">
    <button class="delete is-large is-pulled-right" @click="$emit('toggle')"></button>
      <p class="menu-label">Flow Settings</p>

    <FlowSettings :pressureRange="pressureRange" :flowRange="flowRange" :pressure="pressure" :flow="flow" />
    </article>
    <article class="block">

    <p class="menu-label">
      Sprinkler info
    </p>
    <ul>
      <li v-show="info.name"><a href="#">Name: {{ info.name }}</a></li>
      <li v-show="info.description"><a href="#">Description: {{ info.description }}</a></li>
    </ul>
    </article>

  </aside>
</transition>
</template>

<script>
import FlowSettings from './FlowSettings.vue';
  export default {
    components: {
      FlowSettings
    },

    props: {
      flow: {
        type: Number
      },
      pressureRange: {
        type: Array
      },
      flowRange: {
        type: Object
      },
      pressure: Number,
      info: Object
    },

    data() {
      return {
        isActive: false,
      }
    },



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/animation-variables.scss";
  #sidebar {
    max-width: 90%;
    z-index: 9999;
    animation-duration: $animate-duration;
    .has-line-height-1 {
      line-height: 1
    }
    // .message {
    //   border-radius: 0px;
    // }
  }
</style>