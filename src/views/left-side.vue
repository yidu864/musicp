<template>
  <div class="scrollbar w-60 shrink-0 overflow-y-auto bg-white/5">
    <!-- 图标行, 毛玻璃 -->
    <div class="sticky top-0 z-10 flex h-12 items-center px-6 backdrop-blur-sm">
      <!-- 三个按钮 -->
      <div class="flex flex-1 space-x-1">
        <div
          class="h-[12px] w-[12px] cursor-pointer rounded-full bg-red-800"
        ></div>
        <div
          class="h-[12px] w-[12px] cursor-pointer rounded-full bg-yellow-600"
        ></div>
        <div
          class="h-[12px] w-[12px] cursor-pointer rounded-full bg-green-800"
        ></div>
      </div>
      <Iconfont
        icon="icon-buju"
        class="cursor-pointer text-base"
      />
    </div>
    <!-- logo 行 -->
    <div class="mb-3 flex h-12 cursor-default select-none items-center pl-5">
      <Iconfont
        icon="icon-github"
        class="mr-3 text-3xl"
      />
      <span class="pr-1 text-lg">SazheSound</span>
    </div>
    <template
      v-for="item in [1, 2, 3, 4, 5]"
      :key="item"
    >
      <!-- 平台聚合 -->
      <div class="pl-5 text-left text-sm leading-10">Your Music {{ item }}</div>
      <!-- 选项 -->
      <div
        v-for="s in [1, 2, 3, 4]"
        :key="'s' + s"
        :class="[
          'relative flex h-10  cursor-pointer items-center rounded pl-4 transition-colors hover:bg-white hover:bg-opacity-30',
          { 'left-list-select': s === 3 }
        ]"
      >
        <Iconfont
          icon="icon-github"
          class="mr-4 text-xl"
        />
        <span class="text-xs">网易云音乐 {{ s }}</span>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import Iconfont from '@/components/iconfont.vue'
// #region component-info
/**
 * 首页左侧栏目
 * @author yidu864
 * @input none
 * @output none
 */
// #endregion

// const cateKeys: Record<typeof cates[number]['key'], string> = cates
//   .map((v) => v.key)
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   .reduce<any>((p, c) => {
//     p[c] = c
//     return p
//   }, {})
</script>
