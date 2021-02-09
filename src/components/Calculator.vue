<template>

  <div class="card">
    <CalcHeader :title="title" :subtitle="subtitle" />
    <FlowSettings v-show="!flowIsSet" :pressureRange="pressureRange" :flowRange="flowRange" :pressure="pressure" :flow="flow" @set="setFlow" />
    <DisplaySettings :flow="flow" :pressure="pressure" v-show="flowIsSet" @reset="showFlowSettings" />
    <NozzleDisplay :nozzles="currentNozzleData" :flow="flow" v-show="flowIsSet"/>
    <footer class="card-footer p-2">
      <a href="#" class="button is-danger card-footer-item" v-show="flowIsSet" @click="resetInputs">reset</a>
      <a href="#" class="card-footer-item"></a>
      <a href="#" class="card-footer-item"></a>
    </footer>
  </div>
</template>

<script>
  import { bus } from '../main';
  import nozzleData from '@/data/nozzleData.js';
  import CalcHeader from './CalcHeader.vue';
  import FlowSettings from './FlowSettings.vue';
  import DisplaySettings from './DisplaySettings.vue';
  import NozzleDisplay from './NozzleDisplay.vue';

  export default {
    components: {
      CalcHeader, FlowSettings, DisplaySettings, NozzleDisplay
    },
    data() {
      return {
        title: "Flow Calculator",
        subtitle: "You pocket irrigation buddy",

        flowIsSet: false,
        pressure: 0,
        flow: 20,
        flowRange: {
          min: 2,
          max: null
        },
        nozzles: nozzleData,
        currentNozzleData: {},
      }
    },

    computed: {
      pressureRange() {
        return Object.keys(this.nozzles);
      }
    },

    methods: {
      setFlow(flow, pressure) {
        this.flowIsSet = true;
        this.flow = parseFloat(flow, 2);
        this.pressure = parseFloat(pressure, 2);
        var key = this.pressure.toString();
        this.currentNozzleData = this.nozzles[key];
      },

      showFlowSettings() {
        this.flowIsSet = false;
      },

      resetInputs() {
        bus.$emit('reset');
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>