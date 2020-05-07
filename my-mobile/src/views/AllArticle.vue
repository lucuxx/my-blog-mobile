<template>
  <div class="allarticle">
    <van-nav-bar title="SkyClub" style="background:#7387fe;">
      <!-- left-arrow -->
      <!-- left-text="skyblue" -->
      <!-- <template #right>
        <van-icon name="search" size="18" />
      </template> -->
    </van-nav-bar>
    <van-loading
      v-if="isshow"
      style="margin-top:50%;"
      type="spinner"
      color="#1989fa"
    />
    <Card v-else :data="articleList"></Card>
    <!-- <div v-for="item in articleList" :key="item._id">
      <div>
        <div>【{{ item.categoryName }}】{{ item.title }}</div>
        <img :src="item.img" width="100" />
        <div>{{ item.abstract }}</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getArticle } from '@/api'
import Card from '@/components/card.vue'
export default {
  name: 'AllArticle',
  components: {
    Card,
  },
  data() {
    return {
      articleList: [],
      isshow: true,
    }
  },
  mounted() {
    this.getArticleList()
  },
  methods: {
    getArticleList() {
      getArticle().then((res) => {
        const { data, code } = res.data
        if (code === 0) {
          this.isshow = false
          this.articleList = data
        }
      })
    },
  },
}
</script>

<style lang="sass" scoped></style>
