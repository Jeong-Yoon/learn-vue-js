<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 컴포넌트 명명법 종류 -->
    <!-- <hello-world></hello-world> component tag로 선언한 것과 같다 -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld_.vue'

export default {
  // 인스턴스 옵션 속성 또는 컴포넌트 옵션 속성을 넣어주면 된다.
  name: 'App',
  components: {
    HelloWorld
    // 'hello-world': HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
