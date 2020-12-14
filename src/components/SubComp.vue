<template>
  <div>
    <!-- <p>全局count:{{ count }}</p> -->
    <p>全局count:{{ showNew }}</p>
    <button @click="sub(5)">-5</button>
    <button @click="subS(5)">-5s</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNew'])
  },
  methods: {
    ...mapMutations(['sub']),
    ...mapActions(['subS'])
  }
}
</script>

<style></style>
