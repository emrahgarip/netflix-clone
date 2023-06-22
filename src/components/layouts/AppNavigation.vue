<script setup>
import DropdownProfile from "../dropdown/DropdownProfile.vue";
</script>
<template>
  <div class="navbar">
    <nav class="navbar--nav">
      <RouterLink to="/browse">Home</RouterLink>
      <RouterLink to="/browse">Series</RouterLink>
      <RouterLink to="/browse">Movies</RouterLink>
      <RouterLink to="/browse">News and Popular</RouterLink>
      <RouterLink to="/browse">My list</RouterLink>
    </nav>
    <section class="navbar--actions">
      <DropdownProfile></DropdownProfile>
    </section>
  </div>
</template>