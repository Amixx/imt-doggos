<template>
  <article class="finnish-spitz-page" vocab="https://schema.org/" typeof="WebPage">
    <h1 class="title" property="name">Discover the Finnish Spitz: The Fascinating National Dog of Finland</h1>

    <img class="image-placeholder" src="@/assets/images/spitz-1.jpg" alt="An enchanting Finnish Spitz"
      property="primaryImageOfPage" />

    <p property="description">
      Explore the world of the Finnish Spitz, a medium-sized breed famed for its fox-like appearance, lively temperament,
      and exceptional intelligence. This captivating breed, known as Suomenpystykorva or Finsk Spets in Finland, holds the
      title of the national dog. The Finnish Spitz boasts a rich history, renowned as a proficient hunting dog and
      cherished companion. Find out more about other fascinating breeds on our <a href="/similar-breeds">similar
        breeds</a> page.
    </p>

    <img class="image-placeholder" src="@/assets/images/spitz-2.jpg"
      alt="Finnish Spitz appreciating the beauty of nature" />

    <div typeof="Product">
      <h2 property="name">What Makes the Finnish Spitz Unique: Appearance</h2>
      <p property="description">
        Finnish Spitz dogs grace their owners with a unique and distinctive appearance. Their red-gold coat, pointed ears,
        and gracefully curled tail are their hallmark features. They display a well-proportioned, square build, typically
        standing 15 to 20 inches tall at the shoulder. Males can weigh between 31 to 35 pounds, while females usually
        range from 22 to 29 pounds. Discover a beautiful collection of Finnish Spitz pictures in our <a
          href="/gallery">gallery</a>.
      </p>

      <h2 property="name">Understanding the Finnish Spitz: Temperament</h2>
      <p property="description">
        Known for their friendly demeanor and alert nature, Finnish Spitz dogs radiate intelligence, making training a
        breeze. Their natural curiosity keeps them actively engaged with their environment. As a sociable breed, they
        thrive on human interaction and are remarkably loyal to their families.
      </p>

      <img class="image-placeholder" src="@/assets/images/spitz-3.jpg" alt="Finnish Spitz enjoying family time"
        property="image" />

      <h2 property="name">Raising a Finnish Spitz: Socialization and Training</h2>
      <p property="description">
        Finnish Spitz dogs benefit from early socialization and consistent training. Bred originally for hunting, these
        dogs possess a strong prey drive and may chase smaller animals. Therefore, early exposure to a variety of people,
        animals, and environments is essential. This early exposure can deter unwanted behaviors and ensure the
        development of a well-rounded, confident Finnish Spitz. For more tips on training and care, visit our <a
          href="/care">care</a> page.
      </p>

      <h2 property="name">Maintaining a Healthy Finnish Spitz: Exercise and Grooming</h2>
      <p property="description">
        Finnish Spitz dogs are active and need daily exercise for mental and physical fitness. Regular walks, play
        sessions, and engaging activities like agility or obedience training can help keep them content and healthy. Their
        dense double coat requires weekly brushing to remove loose hair and minimize shedding. Return to our <a
          href="/">home</a> page to explore more about Finnish Spitz and other breeds.
      </p>
      <Rating :rating="{ breedName: 'Finnish Spitz', ratingValue: 4.8, bestRating: 5 }" />
    </div>
  </article>
</template>

<script lang="ts">
export const documentProps = {
  title: "Finnish Spitz: Finnish Dogs and The National Dog of Finland",
  description: "Learn about the Finnish Spitz, a star among Finnish dogs and the national dog of Finland. Discover its distinctive look, temperament, training needs, and care tips. The page also features a user-based rating of the breed."
};
</script>
<script setup lang="ts">
import Rating from "../components/Rating.vue";
</script>



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
}</style>
