<template>
  <svg
    class="iconfont"
    aria-hidden="true"
  >
    <use :xlink:href="'#' + icon"></use>
  </svg>
</template>
<script setup lang="ts">
// #region component-info
/**
 * iconfont-icon
 * @author yidu864
 * @input iconname
 */
// #endregion
defineProps<{
  icon: string
}>()
</script>
