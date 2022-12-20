<template>
  <div
    class="flex items-center rounded-md bg-black bg-opacity-10 px-2 transition-all focus-within:bg-opacity-40"
  >
    <Iconfont
      :icon="icon"
      class="mr-2"
    />
    <input
      type="text"
      :placeholder="placeholder"
      class="bg-transparent outline-none"
    />
  </div>
</template>
<script setup lang="ts">
// #region component-info
/**
 * 搜索栏
 * @author yidu864
 * @input placeholder icon ..
 * @output emit
 */
// #endregion

withDefaults(
  defineProps<{
    icon: string
    placeholder: string
  }>(),
  {
    icon: 'icon-search',
    placeholder: ''
  }
)
</script>
