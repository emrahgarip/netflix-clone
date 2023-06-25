<script setup>
import {ref, onMounted, computed} from "vue";
const getPopular = ref(null)
const options = {
method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_KEY}`
  }
};

onMounted(async () => {
  //GET MOVIES
  try {
    const data = await fetch(`${import.meta.env.VITE_BASE_URI}/movie/popular`, options)
    const movies = await data.json()
    getPopular.value = movies.results

  } catch (error) {
    console.log(error)
  }
})


const getFilmTitle = computed(() => {
  return getPopular.value ? getPopular.value.find(poster => poster.original_title === 'Fast X') : []
})



</script>
<template>
  <div class="cover">
    <div class="cover__image-box">
      <img :src="`https://image.tmdb.org/t/p/original${getFilmTitle.backdrop_path}`" />
      <div class="cover__meta">
        <h4>FAST X</h4>
        <p>The final chapters of one of cinema's most storied and popular global franchises, now in its third decade and still going strong with the same core cast and characters as when it began.</p>
        <div class="cover__meta__buttons">
          <button class="play">
            <PlayIcon></PlayIcon>
            Watch now
          </button>
          <button class="info">
            <InfoIcon></InfoIcon>
            More info
          </button>
        </div>
      </div>
    </div>
  </div>
</template>