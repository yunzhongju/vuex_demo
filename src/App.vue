<template>
  <div id="app">
     <my-add></my-add>
     <div>--------------------------------------------------------</div>
     <my-sub></my-sub>
  </div>
</template>

<script>
import AddComp from './components/AddComp.vue'
import SubComp from './components/SubComp.vue'
export default {
  name: 'App',
  components: {
    'my-add': AddComp,
    'my-sub': SubComp
  }
}
</script>

<style></style>
