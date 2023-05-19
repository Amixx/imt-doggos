<template>
  <div property="aggregateRating" typeof="AggregateRating">
    <h2>Overall Rating</h2>
    <p>
      {{ rating.breedName }} gets an average rating of
      <span property="ratingValue">{{ rating.ratingValue }}</span>.
    </p>
    <meta property="reviewCount" content="100" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ rating: { breedName: string; ratingValue: number; bestRating: number } }>();
</script>