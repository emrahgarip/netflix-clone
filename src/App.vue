<script setup>
import { RouterView, useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="app-pages" :class="{ 'app-browse' : route.name === 'browse' }">
    <AppHeader></AppHeader>
    <main>
      <RouterView />
    </main>
  </div>
</template>