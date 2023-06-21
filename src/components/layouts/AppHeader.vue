<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import { computed, onMounted } from "vue"
  const route = useRoute();

  const isBrowseView = computed(() => {
    return route.name === 'browse'
  })

  onMounted (() => {
    document.body.classList.add('body-browse')
  })
</script>
<template>
  <header
    class="header"
    v-if="route.name !== 'login'"
    :class="{'header--browse' : route.name === 'browse'}"
  >
    <RouterLink
      :to="isBrowseView ? '/browse' : '/'"
      class="header--logo"
      :class="{'small mr-25' : isBrowseView}"
    >
      <AppLogo></AppLogo>
    </RouterLink>
    <div class="header--actions" v-if="!isBrowseView">
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
      <RouterLink to="/login" class="button signin">Sign In</RouterLink>
    </div>
    <AppNavigation v-if="isBrowseView"></AppNavigation>
  </header>
</template>