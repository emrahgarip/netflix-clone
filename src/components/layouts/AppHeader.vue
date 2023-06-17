<script setup>
  import { RouterLink } from 'vue-router';
</script>
<template>
  <header class="header">
    <RouterLink to="/" class="header--logo">
      <AppLogo></AppLogo>
    </RouterLink>
    <div class="header--actions">
      <!-- SELECT LANGUAGE -->
      <div class="select-lang">
        <div class="icon">
          <GlobalEarth></GlobalEarth>
        </div>
        <select name="" id="">
          <option value="English">English</option>
          <option value="Türkçe">Türkçe</option>
        </select>
        <div class="caret-down">
          <CaretDown></CaretDown>
        </div>
      </div>
      <!-- SIGN IN -->
      <RouterLink to="/" class="button signin">Sign In</RouterLink>
    </div>
  </header>
</template>