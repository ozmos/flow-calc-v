<template>

  <div class="card">
    <CalcHeader :title="title" :subtitle="subtitle" />
    <article class="card-content has-background-light" id="flow-settings" v-show="!flowIsSet">
    <FlowSettings :pressureRange="pressureRange" :flowRange="flowRange" :pressure="pressure" :flow="flow" />
    </article>
    <DisplaySettings :flow="flow" :pressure="pressure" v-show="flowIsSet" @toggle="toggleMenu"/>
    <Sidebar v-show="showMenu" @toggle="toggleMenu" :pressureRange="pressureRange" :flowRange="flowRange" :pressure="pressure" :flow="flow" :info="{name: 'Rainbird 3500 series', description: 'gear drive sprinkler'}"/>
    
    <NozzleDisplay :nozzles="currentNozzleData" :flow="flow" v-show="flowIsSet"/>
   
  </div>
</template>

<script>
import {bus} from '../main';
  import nozzleData from '@/data/nozzleData.js';
  import CalcHeader from './CalcHeader.vue';
  import FlowSettings from './FlowSettings.vue';
  import DisplaySettings from './DisplaySettings.vue';
   import Sidebar from './Sidebar.vue';
  import NozzleDisplay from './NozzleDisplay.vue';

  export default {
    components: {
      CalcHeader, FlowSettings, DisplaySettings, NozzleDisplay, Sidebar
    },
    data() {
      return {
        title: "Flow Calculator",
        subtitle: "You pocket irrigation buddy",

        flowIsSet: false,
        flow: 20,
        pressure: 0,
        flowRange: {
          min: 2,
          max: null
        },
        nozzles: nozzleData,
        currentNozzleData: {},
        showMenu : false
      }
    },

    computed: {
      pressureRange() {
        return Object.keys(this.nozzles);
      },
      
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

      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    },

     created() {
      bus.$on('set', (flow, pressure) => {
        this.setFlow(flow, pressure);
      })
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>