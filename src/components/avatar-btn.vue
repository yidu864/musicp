<template>
  <div class="group relative cursor-pointer">
    <slot>
      <img
        :src="pic"
        class="h-[100%] rounded-md"
      />
    </slot>
    <div
      class="absolute top-1/2 left-1/2 flex h-1/4 w-1/4 -translate-y-1/2 -translate-x-1/2 justify-center rounded-full opacity-0 backdrop-blur transition hover:bg-white hover:bg-opacity-20 group-hover:opacity-100"
    >
      <Iconfont
        icon="icon-bofang"
        class="translate-x-[8%] self-center transition-colors hover:text-white"
        style="--iconsize: 80%"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
// #region component-info
/**
 * 按钮化头像
 * @author yidu864
 * @input url / slot
 * @output event
 */
// hover,图片上面浮现一个按钮
// 不一定是图片, 啥东西都行
// #endregion

defineProps<{
  pic: string
}>()
</script>
