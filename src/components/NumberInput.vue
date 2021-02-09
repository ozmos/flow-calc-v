<template>
<div class="number-input is-flex is-flex-wrap-nowrap is-align-items-center is-justify-content-center">
  <span class="plus-minus button has-text-weight-bold is-success" @click="adjust(-1)">-</span>
  <input type="number" v-model="count" :min="min" :max="max" class="has-text-centered">
  <span class="plus-minus button has-text-weight-bold is-success" @click="adjust(1)">+</span>
</div>
</template>

<script>
  export default {

    props: {
      value: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: Number
    },

    data() {
      return {
        count: this.value
      }
    },

    methods: {
      adjust(increment) {
        this.count = parseInt(increment, 10) + parseInt(this.count, 10);
        this.$emit('changeCount', this.count);
      },

      reset() {
         this.count = 0;
        this.$emit('changeCount', this.count);
      }
    },

    // event bus listener
   
       
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import '~bulma';
 .number-input {
    height: 2.5em;
    * {
      height: 100%;
    }
    input {
      width: 50px;
      border: none;
      border-top: 1px solid $grey-lighter;
      border-bottom: 1px solid $grey-lighter;
    }

  }


  
</style>