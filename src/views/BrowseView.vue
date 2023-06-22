<script setup>
  import {onMounted, ref} from "vue";

  const topRate = ref(null)
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_KEY}`
  }
};

const fetchRated = ()  => fetch(`${import.meta.env.VITE_BASE_URI}/movie/top_rated`, options)
  .then(response =>  response.json())
  .then(response => topRate.value = response.results)
  .catch(err => console.log(err))

onMounted(() => {
  fetchRated()
})



</script>
<template>
  <div class="browse">
    <!-- <p style="color: #fff;" v-for="(item, index) in topRate" :key="index">
      <img :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`"  />
    </p> -->
  </div>
</template>