<template>
  <!-- 封面 歌名/专辑 歌名 操作栏(加入播放列表 加入歌单 删除 原始链接) -->
  <!-- hover:bg-p-light hover:bg-opacity-20 -->
  <div
    :class="[
      'song-item group flex rounded-md border-b-2 border-b-p-light border-opacity-20 py-2 px-2 transition',
      active ? 'bg-p-base/50' : 'hover:bg-white/20'
    ]"
  >
    <!-- 封面 -->
    <!-- http://img.oulu.me/003%20Spring%20Warmth.png -->
    <img
      :src="avatar"
      alt="song vatar"
      class="mr-[1vw] h-12 w-12 cursor-pointer rounded"
    />
    <div class="flex-1 self-center overflow-hidden">
      <!-- Heart of Sakura (Original Mix) -->
      <div class="cursor-pointer truncate font-bold hover:underline">
        {{ sname }}
      </div>
      <div class="truncate text-sm">
        <a class="cursor-pointer hover:underline">{{ artist }}</a>
      </div>
    </div>
    <div class="flex-1 self-center">
      <!-- A World of Illusion -->
      <a class="cursor-pointer hover:underline">{{ album }}</a>
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
 * @artist yidu864
 * @input none
 * @output none
 */
// #endregion

type Props = {
  active?: boolean
  avatar: string
  artist: string | null
  album: string | null
  sname: string
  // 类型, 决定操作栏
  type?: string
}

withDefaults(defineProps<Props>(), {
  active: false,
  avatar:
    'https://p1.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg?param=224y224',
  artist: '',
  album: '',
  type: ''
})
</script>
