<template>
    <div class="finnish-spitz-page" vocab="https://schema.org/" typeof="WebPage">
      <h1 class="title" property="name">Finnish Spitz: The National Dog of Finland</h1>

      <img class="image-placeholder" src="@/assets/images/spitz-1.jpg" alt="Finnish Spitz" property="primaryImageOfPage"/>

      <p property="description">
        The Finnish Spitz is a medium-sized dog breed known for its fox-like appearance, lively temperament, and
        intelligence. Originating from Finland, the Finnish Spitz is often called Suomenpystykorva or Finsk Spets in its
        native country. As the national dog of Finland, this breed has a long and storied history as both a hunting dog
        and a loyal companion.
      </p>

      <img class="image-placeholder" src="@/assets/images/spitz-2.jpg" alt="Finnish Spitz in nature" />

      <div typeof="Product">
        <h2 property="name">Appearance</h2>
        <p property="description">
          Finnish Spitz dogs have a distinctive look, characterized by their red-gold coat, pointed ears, and curled tail.
          They have a square, well-proportioned build, and their size typically ranges from 15 to 20 inches tall at the
          shoulder, with a weight of 31 to 35 pounds for males and 22 to 29 pounds for females.
        </p>

        <h2 property="name">Temperament</h2>
        <p property="description">
          Finnish Spitz dogs are known for their friendly and alert nature. They are highly intelligent, making them
          relatively easy to train, and their natural curiosity keeps them engaged in their surroundings. As a social
          breed, they thrive on human interaction and are very loyal to their families.
        </p>

        <img class="image-placeholder" src="@/assets/images/spitz-3.jpg" alt="Finnish Spitz with family" property="image" />

        <h2 property="name">Socialization and Training</h2>
        <p property="description">
          Early socialization and consistent training are essential for Finnish Spitz dogs. As a breed originally bred for
          hunting, they have a strong prey drive and may be inclined to chase smaller animals. Exposing them to different
          people, animals, and environments from a young age can help prevent unwanted behaviors and ensure they grow up to
          be well-rounded, confident dogs.
        </p>

        <h2 property="name">Exercise and Grooming</h2>
        <p property="description">
          Finnish Spitz dogs are energetic and require daily exercise to keep them mentally and physically fit. Regular
          walks, play sessions, and engaging activities like agility or obedience training can help keep them happy and
          healthy. Their dense double coat requires weekly brushing to remove loose hair and minimize shedding.
        </p>
      </div>
    </div>
</template>

<style scoped>
.finnish-spitz-page {
    font-family: Arial, sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem;
}

.title {
    text-align: center;
    margin: 2rem 0;
}

.image-placeholder {
    width: 100%;
    height: auto;
    margin: 1rem 0;
}

h2 {
    margin: 2rem 0 1rem;
    font-size: 1.5rem;
}

p {
    text-align: justify;
    line-height: 1.6;
}
</style>
<script setup lang="ts">
</script>