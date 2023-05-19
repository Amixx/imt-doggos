<template>
  <div typeof="AggregateRating">
    <h2 property="name">Overall Rating</h2>
    <p>
      {{ rating.breedName }} gets an average rating of
      <span property="ratingValue">{{ rating.ratingValue }}</span>
      out of
      <span property="bestRating">{{ rating.bestRating }}</span>.
    </p>
    <meta property="ratingCount" content="100" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ rating: { breedName: string; ratingValue: number; bestRating: number } }>();
</script>