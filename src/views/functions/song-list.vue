<template>
  <section
    class="scrollbar flex-1 overflow-y-auto scroll-smooth"
    @scroll="onScroll"
  >
    <!-- 顶栏 = 歌单封面 -->
    <header
      ref="hd"
      :class="[
        'sticky top-0 flex gap-[2vw] px-[2vw] py-[1vw] ',
        hdExpand ? '' : 'backdrop-blur-md'
      ]"
    >
      <!-- 封面 -->
      <aside
        :class="[
          'relative transition-all',
          hdExpand ? 'h-[25vh] w-[25vh]' : 'h-[10vh] w-[10vh]'
        ]"
      >
        <AvatarBtn
          pic="http://y.gtimg.cn/music/photo_new/T002R300x300M0000042m8G61Judeb.jpg?n=1?param=512y512"
          class="z-10 h-[100%] w-[100%] rounded-md"
        />
        <!-- <img
          class="relative "
          src="http://img.oulu.me/056%20Shady%20Water.png"
        /> -->
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
        <h2
          :class="[
            'mt-1 flex-1',
            hdExpand ? 'mb-7 text-3xl font-bold' : 'mb-1 text-xl'
          ]"
        >
          纯音 | 缓解压力.安眠.去享受孤独 纯音 | 缓解压力.安眠.去享受孤独 纯音
        </h2>
        <div class="space-x-2">
          <span>
            <button
              :class="[
                'hover:bg-weak-dark inline-flex items-center rounded-l-md bg-pbg-blue px-2 py-1 transition-all'
              ]"
            >
              <Iconfont icon="icon-bofang" />
              <span class="ml-1">
                {{ hdExpand ? '播放全部' : '' }}
              </span>
            </button>
            <button
              :class="[
                'hover:bg-weak-dark rounded-r-md bg-pbg-blue px-2 py-1 align-top transition-all'
              ]"
            >
              <Iconfont
                icon="icon-plus"
                :class="hdExpand ? 'inline-block' : ''"
              />
            </button>
          </span>
          <button
            :class="[
              'hover:bg-weak-dark inline-flex items-center rounded-md bg-pbg-blue px-2 py-1 transition-all'
            ]"
          >
            <Iconfont icon="icon-wenbenshuru" />
            <span class="ml-1">{{ hdExpand ? '编辑' : '' }}</span>
          </button>
          <button
            :class="[
              'hover:bg-weak-dark inline-flex items-center rounded-md bg-pbg-blue px-2 py-1 transition-all'
            ]"
          >
            <Iconfont icon="icon-daoru" />
            <span class="ml-1">{{ hdExpand ? '导入' : '' }}</span>
          </button>
        </div>
      </main>
    </header>

    <!-- 歌曲列表 -->
    <!-- 列表项 = 封面 歌名/专辑 歌名 操作栏(加入播放列表 加入歌单 删除 原始链接) -->
    <main class="space-y-1 px-[2vw] pt-[1vw]">
      <song-item
        v-for="item in songs"
        :key="item.id"
        :sname="item.name"
        :artist="item.ar"
        :album="item.al"
        :avatar="item.img"
      />
    </main>
  </section>
</template>
<script setup lang="ts">
import songs from '@/assets/cache.json'

import { ref } from 'vue'
import { debounce } from 'lodash'

import AvatarBtn from '@/components/avatar-btn.vue'
import SongItem from './song-item.vue'

// #region component-info
/**
 * 歌单列表通用页面
 * @author yidu864
 * @input 平台/id/。。。
 * @output none
 */
// #endregion

// onMounted(() => {
//   hd.value
// })

const hdExpand = ref(true)
let onScroll = (e: any) => {
  const target: HTMLDivElement = e.target
  hdExpand.value = target.scrollTop < 10
}
onScroll = debounce(onScroll, 200)
</script>
