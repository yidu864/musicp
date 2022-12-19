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
    <div
      class="flex h-10 items-center rounded-md bg-black bg-opacity-10 px-2 transition-all focus-within:bg-opacity-40"
    >
      <Iconfont
        icon="icon-search"
        class="mr-2"
      />
      <input
        type="text"
        placeholder="press to search"
        class="bg-transparent outline-none"
      />
    </div>
  </header>
</template>
<script setup lang="ts">
import Iconfont from '@/components/iconfont.vue'
// #region component-info
/**
 * 前进后退按钮，搜索栏
 * @author yidu864
 * @input none
 * @output none
 */
// #endregion
</script>
