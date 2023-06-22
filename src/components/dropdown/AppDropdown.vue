<script setup>
  import {ref, onMounted} from "vue";
  const props = defineProps({
    customClass: String
  })

  const isShow = ref(false)

  const closeDropdown = (event) => {
   if (!event.target.matches('.dropdown-content-active')) {
    isShow.value = false
   }
  }

  onMounted(()=> {
    window.addEventListener('click', closeDropdown)
  })
</script>
<template>
  <div class="dropdown" :class="props.customClass">
    <button
      class="dropdown-button"
      @mouseover="isShow = true">
      <slot name="button"></slot>
    </button>
    <div class="dropdown-content" :class="{'dropdown-content-active' : isShow}">
      <ul class="dropdown-menu">
        <slot name="menu"></slot>
      </ul>
    </div>
  </div>
</template>