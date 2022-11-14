<template>
  <!-- 右侧 -->
  <section class="flex w-16 flex-col bg-white/5">
    <div class="flex-1"></div>
    <div class="flex flex-col items-center space-y-4 pb-4">
      <button
        class="flex h-12 w-12 items-center justify-center rounded-full bg-black bg-opacity-10 hover:text-white"
        data-title="logout"
        title="logout"
      >
        <Iconfont
          icon="icon-infofill"
          class="text-xl"
        />
      </button>
      <button
        class="flex h-12 w-12 items-center justify-center rounded-full bg-black bg-opacity-10 hover:text-white"
        data-title="logout"
        title="logout"
      >
        <Iconfont
          icon="icon-logout"
          class="text-xl"
        />
      </button>
      <a
        class="flex h-12 w-12 items-center justify-center rounded-full bg-black bg-opacity-10 hover:text-white"
        data-title="logout"
        title="logout"
      >
        <Iconfont
          icon="icon-wangyiyunyinle"
          class="text-xl"
        />
      </a>
    </div>
  </section>
</template>
<script setup lang="ts">
// #region component-info
/**
 * tsv3
 * @author yidu864
 * @input none
 * @output none
 */

import Iconfont from '@/components/iconfont.vue'

// #endregion
</script>
