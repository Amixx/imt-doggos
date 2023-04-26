<template>
    <div class="dog-images-grid">
        <img v-for="(url, index) in dogImages" :key="index" :src="url" :alt="'Dog ' + (index + 1)" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const dogImages = ref([]);

async function fetchDogImages(count) {
    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
        const data = await response.json();
        if (data.status === 'success') {
            dogImages.value = data.message;
        } else {
            console.error('Error fetching dog images:', data);
        }
    } catch (error) {
        console.error('Error fetching dog images:', error);
    }
}

onMounted(() => {
    fetchDogImages(9);
});
</script>

<style scoped>
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
