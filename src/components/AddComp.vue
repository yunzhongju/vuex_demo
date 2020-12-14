<template>
  <div>
    <!-- <p>全局count:{{$store.state.count}}</p> -->
    <p>全局count:{{$store.getters.showNew}}</p>
    <button @click="$store.commit('add',5)">+5</button>
    <button @click="$store.dispatch('addS',5)">+5s</button>
  </div>
</template>

<script>

</script>

<style>
</style>
