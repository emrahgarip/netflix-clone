<script setup>
import PlusIcon from './icons/PlusIcon.vue';

  const props = defineProps({
    title: String,
    data: Array
  })
</script>
<template>
  <div class="accordion">
    <h3 class="accordion--title">{{ props.title }}</h3>
    <details class="accordion--item" v-for="(item, index) in data" :key="index">
      <summary class="accordion--item__title">
        {{ item.title }}
        <div class="icon-box">
          <PlusIcon></PlusIcon>
        </div>
      </summary>
      <div class="accordion--item__content">{{ item.content }}</div>
    </details>
  </div>
</template>