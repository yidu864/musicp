<template>
  <div class="flex w-80 shrink-0 flex-col border-l-2 border-weak">
    <!-- 头像 id 通知 设置图标 -->
    <div class="box-border flex items-center space-x-3 p-5">
      <div
        class="h-8 w-8 shrink-0 rounded-full"
        :style="{
          backgroundImage: `linear-gradient(45deg,#ff9a9e 0%,#fad0c4 99%,#fad0c4 100%)`
        }"
      ></div>
      <div class="truncate text-sm font-bold">
        Sebastian Vettel Sebastian Vettel Sebastian Vettel Sebastian Vettel
        Sebastian Vettel
      </div>
      <Iconfont
        icon="icon-shezhi"
        class="shrink-0 cursor-pointer text-base"
      />
    </div>
    <!-- 最近播放, 查看全部 -->
    <div class="scrollbar flex-1 space-y-2 overflow-y-auto px-5 text-sm">
      <div
        class="sticky top-0 flex items-center justify-between bg-based leading-8"
      >
        <h3 class="cursor-default font-bold">Recent play</h3>
        <span class="cursor-pointer text-xs">See All</span>
      </div>
      <!-- 20 条影月列表 -->
      <!-- avatar 上歌名 下艺术家名 右侧多久以前 -->
      <div
        v-for="(item, i) in new Array(20).fill(1)"
        :key="item + i"
        class="flex cursor-pointer space-x-3"
      >
        <div
          class="h-10 w-10 shrink-0 rounded"
          :style="{
            backgroundImage: `linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)`
          }"
        ></div>
        <div class="flex flex-col overflow-x-hidden">
          <div class="truncate font-bold leading-6">
            Blank SpaceBlank SpaceBlank SpaceBlank Space
          </div>
          <div class="truncate text-xs leading-4">
            Taylor Swift Taylor Swift Taylor Swift Taylor Swift Taylor Swift
          </div>
        </div>
        <div class="shrink-0 text-xs leading-10">12 min ago</div>
      </div>
    </div>
    <!-- 正在播放的歌 -->
    <!-- avatar -->
    <!-- 左 上歌名 下艺术家名 右侧是否喜欢 -->
    <div class="flex flex-col-reverse px-6 pt-7 pb-3">
      <div class="flex flex-col">
        <div class="text-bold truncate text-center">
          Wildest Dreams
          <!-- Wildest Dreams Wildest Dreams Wildest Dreams -->
        </div>
        <div class="truncate text-center text-xs text-based opacity-60">
          Taylor Swift
          <!-- Taylor Swift Taylor Swift Taylor Swift Taylor Swift -->
        </div>
      </div>
      <div
        class="mb-3 h-[196px] rounded"
        :style="{
          backgroundImage: `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)`
        }"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Iconfont from '@/components/iconfont.vue'
// #region component-info
/**
 * tsv3
 * @author yidu864
 * @input none
 * @output none
 */
// #endregion
</script>
