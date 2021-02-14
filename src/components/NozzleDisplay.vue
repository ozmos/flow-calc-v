<template>
<transition 
  name="slide"
  enter-active-class="slideInDown"
  leave-active-class="slideOutLeft"
>
  <article class="card-content pl-0 pr-0" id="nozzle-display">
    <table class="table is-fullwidth has-text-centered">
     
      <thead>
        <tr>
          <th title="nozzle">Noz</th>
          <th title="number">Num</th>
          <th class="is-hidden-mobile" title="radius">Throw(m)</th>
          <th title="required flow">Flow</th>
        </tr>
      </thead>
      <tbody>
        <!-- inputs (component )-->
        <Nozzle v-for="(data, nozzle) in nozzles" :key="nozzle" :nozzle="nozzle" :nozzleFlow="data.flow" :nozzleThrow="data.throw" @add="addTotal"/>
       
        
        <!-- Totals -->
        <tr>
          <th>Total</th>
          <th></th>
          <th class="is-hidden-mobile"></th>
          <th>{{ formattedTotal }}</th>
        </tr>
        <tr>
          <th >Stations</th>
          <th></th>
          <th class="is-hidden-mobile"></th>
          <th>{{ stations }}</th>
        </tr>
      </tbody>
      
    </table>
     <footer class="card-footer p-2">
      <a href="#" class="button is-danger card-footer-item" @click="resetInputs">reset</a>
      <a href="#" class="card-footer-item"></a>
      <a href="#" class="card-footer-item"></a>
    </footer>
  </article>
</transition>
</template>

<script>
  import { bus } from '../main';
  import Nozzle from './Nozzle.vue';
  export default {

    components: {
      Nozzle
    },

    // name: 'DisplaySettings',
    props: {
      flow: Number, 
      nozzles: Object,
    },

    data() {
      return {
        tally: {
          0 : 0,
          },
        stations: 0,
        rawTotal: 0
      }
    },

    computed: {
      formattedTotal() {
        return this.numberHelpers.roundUp(this.rawTotal, 2);
      }
    },

    methods: {
      addTotal(nozzle, subTotal) {
        this.tally[nozzle] = subTotal;
        this.rawTotal = Object.values(this.tally).reduce((acc, curr) => {
          return acc + curr;
        });
        this.stations = Math.ceil(this.rawTotal / this.flow);
      },

      resetInputs() {
        bus.$emit('reset');
      }
    }



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/animation-variables.scss";
#nozzle-display {

      animation-duration: $animate-duration;
    // animation-delay: 0s;
}
</style>