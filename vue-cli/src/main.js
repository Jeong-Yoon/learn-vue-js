import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
  // components: {
  //   'app': App
  // }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App) // vue 내부적으로 사용하는 함수, 사용자들도 사용할 수 있는 함수, template이라는 속성을 정의했을 때 내부적으로 실행되는 함수
// })