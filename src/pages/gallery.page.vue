<template>
  <main vocab="https://schema.org/" typeof="CollectionPage">
    <h1 property="name">Dogs in Focus: A Showcase of Stunning Canine Photography</h1>
    <div class="dog-images-grid">
      <div v-for="(url, index) in dogImages" :key="index" typeof="ImageObject">
        <img :src="url" :alt="'Dog ' + (index + 1)" property="contentUrl" />
        <meta property="name" :content="'Dog ' + (index + 1)" />
        <meta property="description" content="A stunning photo of a dog." />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export const documentProps = {
  title: "Gallery",
  description: "Immerse yourself in 'Dogs in Focus', a showcase featuring stunning canine photography. Browse through a wide collection of beautiful, high-quality dog images captured in various scenarios and settings."
};
</script>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const dogImages = ref([]);

async function fetchDogImages(count: number) {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
    const data = await response.json();
    if (data.status === "success") {
      dogImages.value = data.message;
    } else {
      console.error("Error fetching dog images:", data);
    }
  } catch (error) {
    console.error("Error fetching dog images:", error);
  }
}

onMounted(() => {
  fetchDogImages(9);
});
</script>

<style scoped>
main {
  padding: 24px 48px;
}

h1 {
  text-align: center;
}

.dog-images-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
