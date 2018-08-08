import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify);

Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
      return "00:0"+value.toString();
  }
  return "00:"+value.toString();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
