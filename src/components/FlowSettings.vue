<template>
<!-- <transition
  name="slideInOnly"
  enter-active-class="slideInDown"
  leave-active-class="zoomUp"
> -->
  <article class="card-content has-background-light" id="flow-settings">

    <div class="field" id="flow">
      <label class="label">Enter your flow in litres per minute</label>
      <div class="control is-flex is-align-items-center" id="flow">
        <!-- <input type="number" v-model="localFlow" :min="flowRange.min" :max="flowRange.max"> -->
        <NumberInput v-model="localFlow" :min="flowRange.min" :max="flowRange.max" @changeCount="updateFlow" :value="flow"/>
        <span class="is-right ml-1">Lpm</span>
      </div>
    </div>
    <!-- ./field -->
    <div class="field" id="pressure">
      <label class="label">Select your working pressure in kilopascals</label>
      <div class="control has-icons-right is-flex is-align-items-center">
        <div class="select">
          <select v-model="localPressure">
            
            <option v-for="(pressure, index) in pressureRange" :key="index" >{{ pressure }}</option>
          </select>
        </div>

          <span class="is-right ml-1">kpa</span>
      </div>
    </div>
    <!-- /.field -->
    <div class="field">
      <div class="control">
        <button class="button is-link" @click="$emit('set', localFlow, localPressure)">Set pressure and flow</button>
      </div>

    </div>
  </article>
<!-- </transition> -->
</template>

<script>
  import NumberInput from './NumberInput.vue';
  export default {
    components: {
      NumberInput
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
      }
    },

    data() {
      return {
        localFlow: this.flow,
        localPressure: this.pressureRange[0]
      }
    },

    methods: {
      updateFlow(count) {
        this.localFlow = count;
      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/animation-variables.scss";
#flow-settings {

      animation-duration: 0.3s;
     
}

</style>