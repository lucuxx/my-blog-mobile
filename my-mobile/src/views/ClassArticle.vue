<template>
  <div class="classarticle">
    <van-nav-bar title="SkyClub" style="background:#7387fe;"> </van-nav-bar>
    <van-sticky>
      <div style="padding:0 10px 0 10px;background:#fff;">
        <van-tabs v-model="activeTab" swipeable ellipsis>
          <van-tab
            v-for="item in articleClassList"
            :key="item._id"
            :title="item.name"
            :value="item.id"
          >
          </van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <van-loading
      v-if="isshow"
      style="margin-top:50%;"
      type="spinner"
      color="#1989fa"
    />
    <Card :data="currentClassArticleList"></Card>
  </div>
</template>

<script>
import { getArticleClass, getCurrentClassArticle } from '@/api'
import Card from '@/components/card.vue'

export default {
  name: 'ClassArticle',
  components: {
    Card,
  },
  data() {
    return {
      activeTab: '',
      articleClassList: [],
      currentClassArticleList: [],
      isshow: true,
    }
  },
  watch: {
    activeTab: {
      handler(newName, oldName) {
        this.getCurrentClassArticleList(this.articleClassList[newName].id)
      },
    },
  },
  mounted() {
    this.getArticleClassList()
  },
  methods: {
    getArticleClassList() {
      getArticleClass().then((res) => {
        const { data, code } = res.data
        if (code === 0) {
          this.articleClassList = data
          if (this.articleClassList.length > 0) {
            this.getCurrentClassArticleList(this.articleClassList[0].id)
          }
        }
      })
    },
    getCurrentClassArticleList(val) {
      getCurrentClassArticle({ id: val }).then((res) => {
        const { data, code } = res.data
        if (code === 0) {
          this.isshow = false
          this.currentClassArticleList = data
        }
      })
    },
  },
}
</script>

<style lang="sass" scoped></style>
