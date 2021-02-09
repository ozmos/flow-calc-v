// https://medium.com/js-dojo/registering-globally-your-helpers-in-a-vue-app-b7ba3b9596b3
import Vue from 'vue'

import numberHelpers from '@/helpers/number-helpers'

export default {
  install: () => {
    Vue.prototype.numberHelpers = numberHelpers
    Vue.numberHelpers = numberHelpers
  }
}