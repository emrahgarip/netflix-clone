<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-pages">
    <AppHeader></AppHeader>
    <main>
      <RouterView />
    </main>
  </div>
</template>