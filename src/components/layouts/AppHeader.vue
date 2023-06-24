<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import { computed, onMounted, ref } from "vue"
  const route = useRoute();

  const isBrowseView = computed(() => {
    return route.name === 'browse'
  })

  const header = ref(null)
  const stickyHeader = () => {
    if (window.scrollY > 70) {
      header.value.classList.add('header--sticky')
    } else{
      header.value.classList.remove('header--sticky')
    }
  }

  onMounted (() => {
    document.body.classList.add('body-browse')
    window.addEventListener('scroll', stickyHeader)
  })
</script>
<template>
  <header
    class="header"
    v-if="route.name !== 'login'"
    :class="{'header--browse' : route.name === 'browse'}"
    ref="header"
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