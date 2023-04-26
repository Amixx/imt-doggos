<template>
    <div class="similar-breeds-page">
        <h1 class="title">Similar Breeds to the Finnish Spitz: Pros and Cons</h1>

        <div v-for="(breed, index) in breeds" :key="index" class="breed-section">
            <img class="image-placeholder" :src="'https://via.placeholder.com/300x200'" :alt="breed.name" />
            <h2>{{ breed.name }}</h2>
            <p>{{ breed.description }}</p>
            <h3>Pros</h3>
            <ul>
                <li v-for="(pro, proIndex) in breed.pros" :key="proIndex">{{ pro }}</li>
            </ul>
            <h3>Cons</h3>
            <ul>
                <li v-for="(con, conIndex) in breed.cons" :key="conIndex">{{ con }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const breeds = [
    {
        name: "Icelandic Sheepdog",
        description:
            "The Icelandic Sheepdog is a friendly and energetic breed that originated in Iceland. They were primarily used for herding sheep and as general farm dogs. Their playful and loyal nature makes them wonderful companions.",
        pros: [
            "Friendly and social",
            "Highly intelligent and trainable",
            "Adaptable to various environments",
            "Good with children and other pets",
        ],
        cons: [
            "Can be vocal",
            "Requires regular exercise",
            "Sheds heavily during shedding seasons",
        ],
    },
    {
        name: "Norwegian Elkhound",
        description:
            "The Norwegian Elkhound is a medium-sized dog breed native to Norway. They are an ancient breed that was used for hunting large game like elk and bears. Known for their intelligence, strength, and versatility, they make excellent working dogs and family pets.",
        pros: [
            "Loyal and protective",
            "Intelligent and independent",
            "Good with children",
            "Sturdy and adaptable",
        ],
        cons: [
            "Can be stubborn",
            "High exercise requirements",
            "May be reserved with strangers",
        ],
    },
    {
        name: "Swedish Vallhund",
        description:
            "The Swedish Vallhund is a small, energetic, and fearless breed that originated in Sweden. They were traditionally used as herding dogs on farms and are known for their agility and intelligence. Swedish Vallhunds make excellent companions for active families and dog sports enthusiasts.",
        pros: [
            "Intelligent and trainable",
            "Friendly and social",
            "Good with children and other pets",
            "Adaptable to various environments",
        ],
        cons: [
            "Can be vocal",
            "Requires regular exercise",
            "Prone to certain health issues like hip dysplasia",
        ],
    },
    {
        name: "Shiba Inu",
        description:
            "The Shiba Inu is a small to medium-sized dog breed that originated in Japan. They are known for their spirited and independent nature, as well as their fox-like appearance. Shiba Inus make loyal and affectionate companions but require consistent training and socialization.",
        pros: [
            "Intelligent and independent",
            "Low grooming requirements",
            "Adaptable to various environments",
            "Good with children when properly socialized",
        ],
        cons: [
            "Can be stubborn",
            "High exercise requirements",
            "May be reserved with strangers",
            "Potential for aggression towards other dogs",
        ],
    },
    // Add more breeds here
];
</script>

<style scoped>
.similar-breeds-page {
    font-family: Arial, sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem;
}

.title {
    text-align: center;
    margin: 2rem 0;
}

.breed-section {
    margin: 2rem 0;
}

.image-placeholder {
    width: 100%;
    height: auto;
    margin: 1rem 0;
}

h2 {
    font-size: 1.5rem;
    margin: 1rem 0;
}

p {
    text-align: justify;
    line-height: 1.6;
}

h3 {
    font-size: 1.2rem;
    margin: 1rem 0;
}

ul {
    list-style-type: disc;
    padding-left: 1.5rem;
}
</style>
