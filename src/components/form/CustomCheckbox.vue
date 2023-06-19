<script setup>
  const props = defineProps({
    id: String
  })
</script>
<template>
  <label :for="props.id" class="custom-checkbox">
    <input
      type="checkbox"
      :name="props.id"
      :id="props.id"
      class="custom-checkbox__hidden"
    >
    <div class="custom-checkbox__visible">
      <CheckIcon></CheckIcon>
    </div>
    <span class="custom-checkbox__label">Remember me</span>
  </label>
</template>