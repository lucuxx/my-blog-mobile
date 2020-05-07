<template>
  <section class="card">
    <div
      v-for="(item, index) in data"
      :key="index"
      @click="jumpToArticle(item)"
    >
      <van-card
        :desc="item.abstract"
        :title="item.title"
        :thumb="item.img"
        class="test"
      >
        <template #title>
          <div style="text-align:left;">{{ item.title }}</div>
        </template>
        <template #desc>
          <div style="text-align:left;">{{ item.abstract }}</div>
        </template>

        <template #tags>
          <div style="text-align:left;">
            <van-tag type="primary">{{
              '【' + item.categoryName + '】'
            }}</van-tag>
          </div>
        </template>
        <template #footer>
          <img class="img" src="../assets/images/time.png" alt="" width="12" />
          <span style="padding:0 5px 0 5px;">{{
            item.updateTime | handlerTime
          }}</span>

          <img
            class="img"
            src="../assets/images/comment.png"
            alt=""
            width="12"
          />
          <span style="padding:0 5px 0 5px;">{{ item.fabulousNum }}</span>
          &nbsp;
          <img
            class="img"
            src="../assets/images/fabulous.png"
            alt=""
            width="12"
          />
          &nbsp;
          <span style="padding:0 5px 0 5px;">{{
            item.commentData.length
          }}</span>
        </template>
      </van-card>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Card',
  filters: {
    handlerTime(val) {
      return moment(Number(val)).format('YYYY-MM-DD HH:mm:ss')
    },
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: [],
    },
  },
  methods: {
    jumpToArticle(item) {
      this.$router.push({ path: '/details', query: { id: item.id } })
    },
  },
}
</script>

<style lang="less" scoped>
.card {
  /*margin-top: 20px;*/
  .test {
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 5px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
    .row {
      height: 70%;

      .col {
        position: relative;
        height: 100%;

        .img {
          width: 100%;
          height: 100%;
        }

        .title {
          margin: 0 0 10px 0;
          font-size: 20px;
        }

        .text {
          /*text-indent: 25px;*/
          line-height: 30px;
          font-size: 14px;
          color: #999999;
          display: -webkit-box;
          text-align: justify;
          letter-spacing: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }

        .desc {
          width: 95%;
          position: absolute;
          bottom: 0;

          .desc_item {
            font-size: 14px;
            color: #999999;
            display: inline-block;
            margin-left: 20px;
            float: right;

            .img {
              width: 17px;
              margin-right: 10px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}
</style>
