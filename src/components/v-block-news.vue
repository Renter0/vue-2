<template>
  <div class="vue-router__list v-block-news">
    <v-simple-news
      v-for="newsItem in NEWS"
      :key="newsItem.id"
      :news_data="newsItem"
      @newsLink="newsLink"
    />
  </div>
</template>
<script>
import vSimpleNews from './v-simple-news.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-block-news',
  components: {
    vSimpleNews
  },
  data() {
    return {
      newsItem: "",
      newsList: [],
    };
  },
  computed: {
    ...mapGetters(['NEWS']),
  },
  methods: {
    
    ...mapActions(['GET_POSTS_FROM_JSON']),
    newsLink(id) {
      this.$router.push({
        name: 'news',
        query: {
          'news': id
        }
      })
    }

  },
  mounted() {
    this.GET_POSTS_FROM_JSON()
  },
}
</script>
<style></style>