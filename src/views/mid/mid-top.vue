<template>
  <header class="flex h-11 px-2 pt-1">
    <div class="flex flex-1">
      <Iconfont
        icon="icon-aleft"
        class="box-content cursor-pointer rounded-md p-3 transition-all hover:bg-white hover:bg-opacity-30"
      />
      <Iconfont
        icon="icon-aleft"
        class="box-content rotate-180 cursor-pointer rounded-md p-3 transition-all hover:bg-white hover:bg-opacity-30"
      />
    </div>
    <Search
      placeholder="press to search"
      class="h-10"
    />
  </header>
</template>
<script setup lang="ts">
import Search from '@/components/search.vue'

// #region component-info
/**
 * 前进后退按钮，搜索栏
 * @author yidu864
 * @input none
 * @output none
 */
// #endregion
</script>
