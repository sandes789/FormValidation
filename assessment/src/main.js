import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import DatePicker from 'vue2-datepicker'

Vue.use(VeeValidate);
Vue.use(DatePicker);

new Vue({
  el: '#app',
  render: h => h(App)
})
