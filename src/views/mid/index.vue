<template>
  <section class="flex flex-1 flex-col overflow-hidden">
    <!-- 上一步下一步， 搜索栏 -->
    <!-- 客制化页面 -->
    <!-- 播放条 -->
    <mid-top />
    <router-view />
    <!-- <play-bar /> -->
  </section>
</template>
<script setup lang="ts">
import MidTop from './mid-top.vue'
// import PlayBar from './play-bar.vue'

// #region component-info
/**
 * 中间的页面
 * @author yidu864
 * @input none
 * @output none
 */
// #endregion
</script>
