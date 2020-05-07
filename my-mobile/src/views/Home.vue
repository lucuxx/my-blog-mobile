<template>
  <div class="home">
    <router-view style="margin-bottom:60px;" />
    <van-tabbar
      v-model="activeMenu"
      style="background:#7387fe;"
      active-color="#fff"
    >
      <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item name="class" icon="points">分类</van-tabbar-item>
      <van-tabbar-item name="message" icon="friends-o">留言</van-tabbar-item>
      <van-tabbar-item name="set" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      activeMenu: 'home',
    }
  },
  watch: {
    activeMenu: {
      handler(newName, oldName) {
        if (newName === 'class') {
          this.$router.push({ name: 'ClassArticle' })
        } else if (newName === 'message') {
          this.$router.push({ name: 'Message' })
        } else if (newName === 'set') {
          this.$router.push({ name: 'Seting' })
        } else if (newName === 'home') {
          this.$router.push({ name: 'AllArticle' })
        }
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
