<script setup lang="ts">
import LeftSide from '@/views/left-side.vue'
import RightSide from '@/views/right-side.vue'
</script>

<template>
  <left-side />
  <router-view />
  <right-side />
</template>
