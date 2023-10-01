<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Sidebar from './../components/Sidebar.vue'
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="xl:col-span-2 z-30">
      <Sidebar />
    </div>
    <div class="xl:col-span-10 col-span-12 xl:py-12 py-20 px-2">
      <RouterView />
    </div>
  </div>
</template>