<template>
  <!-- template Root는 하나의 element가 있어야 함 -->
  <div>
    <!-- {{ str }} -->
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header
      v-bind:propsdata="str"
      v-on:renew="renewStr">
    </app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }

// new Vue({
//   data: {
//     str: 'hi'
//   }
// })

export default {
  // 컴포넌트를 재사용할 확률이 높아지기 때문에 여러개의 컴포넌트에서 동일한 값을 참조하면 안되기 때문에
  // 객체가 아닌 function 함수로 새 객체를 반환하는 형태가 되어야 한다.
  data: function() {
    return{
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>