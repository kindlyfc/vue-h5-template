<template>
  <header class="header">VUE H5开发模板</header>
  <p class="intro-header">
    {{ $t('introduction') }}
    <a href="https://github.com/sunniejs/vue-h5-template.git">
      <van-icon class="github-icon" name="github" />
    </a>
  </p>
  <van-cell-group title="主要技术、插件" class="supportList pl-5">
    <van-cell title="Vue3" />
    <van-cell title="Vite" />
    <van-cell title="TypeScript" />
    <van-cell title="Vue-router" />
    <van-cell title="Axios" />
    <van-cell title="Vant" />
    <van-cell title="TailWindCss" />
    <van-cell title="Pinia" />
    <van-cell title="Eslint" />
    <van-cell title="Lint-Staged" />
    <van-cell title="Vue-I18n" />
    <van-cell title="Postcss-Px-To-Viewport" />
  </van-cell-group>
  {{ getUserInfo }}
  <van-button type="primary" class="test !mt-5"
    >宽度375px，测试viewport适配</van-button
  >
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useUserStore } from '/@/store/modules/user'

  const userStore = useUserStore()
  const getUserInfo = computed(() => {
    const { name = '' } = userStore.getUserInfo || {}
    return name
  })
</script>
<style scoped>
  .test {
    width: 375px;
  }
  .header {
    display: flex;
    justify-content: center;
    margin: 26px 0 10px;
    padding: 0 20px;
    height: 50px;
    height: 30px;
    font-size: 20px;
  }

  .intro-title {
    text-align: center;
  }

  .intro-header {
    height: 30px;
    font-size: 16px;
    text-align: center;
  }

  .supportList {
    margin: 0 16px;
  }

  .github-icon {
    margin-top: 4px;
    font-size: 24px;
  }

  .btn-wrap {
    margin: 20px;
  }
</style>
