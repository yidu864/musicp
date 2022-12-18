<template>
  <!-- 封面 歌名/专辑 歌名 操作栏(加入播放列表 加入歌单 删除 原始链接) -->
  <div
    class="song-item group flex rounded-md border-b-2 border-b-p-light border-opacity-20 py-2 px-2 transition hover:bg-p-light hover:bg-opacity-20"
  >
    <!-- 封面 -->
    <img
      src="http://img.oulu.me/003%20Spring%20Warmth.png"
      alt="song vatar"
      class="mr-[1vw] h-12 w-12 cursor-pointer rounded"
    />
    <div class="flex-1 self-end overflow-hidden">
      <div class="truncate font-bold">Heart of Sakura (Original Mix)</div>
      <div class="truncate text-sm">
        <a class="cursor-pointer hover:underline">DaniSogen</a>
      </div>
    </div>
    <div class="flex-1 self-center">
      <a class="cursor-pointer hover:underline">A World of Illusion</a>
    </div>
    <div
      class="flex flex-grow-0 items-center space-x-2 text-lg text-white/50 opacity-0 transition-opacity group-hover:opacity-100"
    >
      <a
        title="添加到播放列表"
        class="cursor-pointer"
      >
        <Iconfont icon="icon-plus" />
      </a>
      <a
        title="添加到歌单"
        class="cursor-pointer"
      >
        <Iconfont icon="icon-xinjianchuangkou" />
      </a>
      <a
        title="删除"
        class="cursor-pointer"
      >
        <Iconfont icon="icon-delete-fill" />
      </a>
      <a
        title="链接"
        class="cursor-pointer"
      >
        <Iconfont icon="icon-link" />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
// #region component-info
/**
 * 歌曲项
 * @author yidu864
 * @input none
 * @output none
 */
// #endregion
</script>
