<template>
  <div class="v-main">
    <section class="vue-router">
      <div class="container">
        <div class="vue-router__wrap">
          <router-link class="vue-router__title" to="/">main</router-link>
          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'v-main',
  props: {},

}
</script>
<style></style>