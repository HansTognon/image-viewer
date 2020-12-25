import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniImageV, uniRedo, uniBars, uniAngleLeftB, uniAngleRightB,
  uniTimesSquare, uniSearchMinus, uniSearchPlus, uniSun,
  uniMoon, uniAdjust } from 'vue-unicons/src/icons'

Unicon.add([uniImageV, uniRedo, uniBars, uniAngleLeftB, uniAngleRightB,
   uniTimesSquare, uniSearchMinus, uniSearchPlus, uniSun, uniMoon, uniAdjust])

Vue.use(Unicon, {
  height: 22,
  width: 22,
  fill: '#fcefcd'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
