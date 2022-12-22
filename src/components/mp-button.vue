<template>
  <button
    :class="[
      'hover:bg-weak-dark justify-center space-x-1 bg-pbg-blue px-2 py-1 text-center transition-all',
      round ? 'rounded-full' : 'rounded-md'
    ]"
  >
    <Iconfont
      v-show="!!icon"
      :icon="icon"
    />
    <slot />
  </button>
</template>
<script setup lang="ts">
// 为何字与svg图标有高度差, svg 默认为 block, 改为 inline-block
// svg 图标如何在 block 容器居中？不是不居中, 是空的span也会占一点位置

// #region component-info
/**
 * 按钮
 * @author yidu864
 * @input none
 * @output none
 */
// #endregion
withDefaults(
  defineProps<{
    icon?: string
    round?: boolean
  }>(),
  {
    icon: '',
    round: false
  }
)
</script>
