<template>
  <div class="scrollbar w-60 shrink-0 overflow-y-auto border-r-2 border-weak">
    <!-- 图标行 -->
    <div class="sticky top-0 z-10 flex bg-based px-6 pt-8 pb-10">
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
    <div class="flex cursor-default select-none items-center pl-5 pb-10">
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
      <div class="mb-4 h-5 pl-5 text-left text-xs leading-5">
        平台聚合 {{ item }}
      </div>
      <!-- 选项 -->
      <div
        class="relative mb-2 ml-2 flex h-10 cursor-pointer items-center rounded pl-3 leading-10 transition-colors hover:bg-weak"
      >
        <Iconfont
          icon="icon-github"
          class="mr-6 text-xl"
        />
        <span>网易云音乐</span>
      </div>
      <div
        class="left-list-select relative mb-2 ml-2 flex h-10 cursor-pointer items-center rounded pl-3 leading-10 transition-colors hover:bg-weak"
      >
        <Iconfont
          icon="icon-github"
          class="mr-6 text-xl"
        />
        <span>网易云音乐</span>
      </div>
      <div
        class="relative mb-2 ml-2 flex h-10 cursor-pointer items-center rounded pl-3 leading-10 transition-colors hover:bg-weak"
      >
        <Iconfont
          icon="icon-github"
          class="mr-6 text-xl"
        />
        <span>网易云音乐</span>
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
const cates = [
  { name: '首页', icon: 'icon-home', key: 'home' },
  { name: '功能区', key: 'gnq' },
  { name: '网易云音乐', icon: 'icon-wangyiyunyinle', key: 'netsee' },
  { name: '私人FM(网易云)', icon: 'icon-luyinjishouyinjidiantai', key: 'fm' }
] as const

// const cateKeys: Record<typeof cates[number]['key'], string> = cates
//   .map((v) => v.key)
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   .reduce<any>((p, c) => {
//     p[c] = c
//     return p
//   }, {})
</script>
