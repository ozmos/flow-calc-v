<template>

        <!-- inputs (component )-->
        <tr>
          <td>{{ nozzle }}</td>
          <td>
          <number-input type="number" name="count" id="count" v-model="count" @changeCount="updateCount" :value="count" ref="input"/>
          </td>
          <!-- <td>{{ nozzleThrow }}</td> -->
          <td>{{ subTotal }} </td>
        </tr>
        <!-- Totals -->

</template>

<script>
import { bus } from '../main';
  import NumberInput from './NumberInput.vue';
  export default {
    components: {
      NumberInput
    },
    // name: 'DisplaySettings',
    props: {
      nozzle: {
        type: String
      },
      nozzleFlow: {
        type: Number
      },
      nozzleThrow: {
        type: Number
      }
    },

    data() {
      return {
        count: 0,
        flow: this.nozzleFlow
      }
    },

    methods: {
      updateCount(count) {
        this.count = count;
        this.$emit('add', this.nozzle, this.subTotal);
      }
    },

    computed: {
      subTotal () {
        return this.numberHelpers.roundUp((this.count * this.flow), 2);
      }
    },

    // event bus listener
    created() {
      bus.$on('reset', () => {
        this.$refs.input.reset();
      })
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td { text-align: center; vertical-align: middle; }
</style>