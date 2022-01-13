<template>
  <a class="vue-router__item item v-detail-news">
    <div class="item__title">{{ POST.title }}</div>
    <div class="item__brief">{{POST.body}}</div>
  </a>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'v-detail-news',
  computed: {
    ...mapGetters(['POST']),
  },
  methods: {
    ...mapActions([
      'GET_POST_BY_ID'
    ]),
  },
  mounted() {
    this.GET_POST_BY_ID(this.$route.query.news)
  },
}
</script>
<style></style>