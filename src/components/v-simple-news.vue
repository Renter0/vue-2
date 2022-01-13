<template>
  <a class="vue-router__item item" @click="newsLink">
    <div class="item__title">{{ news_data.title }}</div>
    <div class="item__brief">{{ news_data.body }}</div>
  </a>
</template>
<script>

export default {
  name: 'v-simple-news',
  props: {
    news_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    newsLink() {
      this.$emit('newsLink', this.news_data.id)
    }
  }
}
</script>
<style></style>