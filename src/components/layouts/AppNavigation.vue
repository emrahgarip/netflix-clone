<script setup>
import DropdownProfile from "../dropdown/DropdownProfile.vue";
import NotificationDropdown from "../dropdown/NotificationDropdown.vue";

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
      <ul class="navbar--action__list">
        <li class="navbar--action__list__item">
          <NotificationDropdown></NotificationDropdown>
        </li>
        <li class="navbar--action__list__item">
          <DropdownProfile></DropdownProfile>
        </li>
      </ul>
    </section>
  </div>
</template>