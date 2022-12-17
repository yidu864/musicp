<template>
  <section class="flex flex-1 flex-col">
    <!-- 顶栏 = 歌单封面 -->
    <header class="flex gap-[2vw] px-[2vw] py-[1vw]">
      <!-- 封面 -->
      <aside class="relative h-[25vh] w-[25vh]">
        <img
          class="relative z-10 h-[100%] w-[100%] rounded-md"
          src="http://img.oulu.me/056%20Shady%20Water.png"
        />
        <!-- 阴影 -->
        <!-- <div
          class="absolute top-3 left-0 z-0 h-[100%] w-[100%] scale-95 rounded-md bg-cover opacity-60 blur-sm"
          style="
            background-image: url(http://img.oulu.me/001%20Warm%20Flame.png);
          "
        ></div> -->
      </aside>
      <!-- 歌单名 / 播放全部按钮 | 加入播放列表 编辑歌单信息 导入 搜索栏 -->
      <main class="flex flex-1 flex-col justify-between">
        <h2 class="mb-7 mt-1 flex-1 text-3xl font-bold text-white">
          纯音 | 缓解压力.安眠.去享受孤独 纯音 | 缓解压力.安眠.去享受孤独 纯音
        </h2>
        <div class="space-x-2">
          <span>
            <button
              class="hover:bg-weak-dark inline-flex items-center rounded-l-md bg-pbg-blue px-2 py-1 align-bottom transition-shadow"
            >
              <Iconfont
                class="mr-1 inline-block"
                icon="icon-bofang"
              />播放全部
            </button>
            <button
              class="hover:bg-weak-dark rounded-r-md bg-pbg-blue px-2 py-1 align-bottom transition-shadow"
            >
              <Iconfont
                class="inline-block"
                icon="icon-plus"
              />
            </button>
          </span>
          <button
            class="hover:bg-weak-dark inline-flex items-center rounded-md bg-pbg-blue px-2 py-1 align-bottom transition-shadow"
          >
            <Iconfont
              class="mr-1 inline-block"
              icon="icon-wenbenshuru"
            />编辑
          </button>
          <button
            class="hover:bg-weak-dark inline-flex items-center rounded-md bg-pbg-blue px-2 py-1 align-bottom transition-shadow"
          >
            <Iconfont
              class="mr-1 inline-block"
              icon="icon-daoru"
            />导入
          </button>
        </div>
      </main>
    </header>

    <!-- 歌曲列表 -->
    <!-- 列表项 = 封面 歌名/专辑 歌名 操作栏(加入播放列表 加入歌单 删除 原始链接) -->
    <main class="flex-1 px-[2vw] pt-[1vw]">
      <song-item />
    </main>
  </section>
</template>
<script setup lang="ts">
import SongItem from './song-item.vue'

// #region component-info
/**
 * 歌单列表通用页面
 * @author yidu864
 * @input 平台/id/。。。
 * @output none
 */

//  批廉操作

// #endregion
</script>
