<script setup>
  const props = defineProps({
    customClass: String
  })
</script>
<template>
  <div class="dropdown" :class="props.customClass">
    <button class="dropdown-button">
      <slot name="button"></slot>
    </button>
    <div class="dropdown-content">
      <ul class="dropdown-menu">
        <slot name="menu"></slot>
      </ul>
    </div>
  </div>
</template>