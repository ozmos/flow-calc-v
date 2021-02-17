<template>
<!-- <transition
  name="slideInOnly"
  enter-active-class="slideInDown"
  leave-active-class="zoomUp"
> -->
  
<div>
    <div class="field" id="flow">
      <label class="label">Flow rate</label>
      <div class="control is-flex is-align-items-center" id="flow">
        <!-- <input type="number" v-model="localFlow" :min="flowRange.min" :max="flowRange.max"> -->
        <NumberInput v-model="localFlow" :min="flowRange.min" :max="flowRange.max" @changeCount="updateFlow" :value="flow"/>
        <span class="is-right ml-1">Lpm</span>
      </div>
    </div>
    <!-- ./field -->
    <div class="field" id="pressure">
      <label class="label">Pressure</label>
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
        <button class="button is-link" @click="set">Set</button>
      </div>

    </div>
  </div>
<!-- </transition> -->
</template>

<script>
import { bus } from '../main';
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
      },
      set() {
        bus.$emit('set', this.localFlow, this.localPressure)
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