<template>

  <article class="card-content pl-0 pr-0">
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
  </article>

</template>

<script>
  import Nozzle from './Nozzle.vue';
  export default {

    components: {
      Nozzle
    },

    // name: 'DisplaySettings',
    props: {
      flow: {
        type: Number
      },
      nozzles: {
        type: Object
      }
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
      }
    }



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>