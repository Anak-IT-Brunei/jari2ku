<template>
  <q-page class="q-pa-lg">
    <h1>About</h1>
    <p>
      This app is inspired by the book "Jari-Jari Ku"to spread awareness and
      understanding of the Brunei Sign Language.
    </p>
    <h2>How to properly sign language?</h2>
    <q-card v-for="step in steps" :key="step.id" class="q-mb-lg">
      <q-img :src="step.image" basic>
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ step.tip }}
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "PageAbout",
  data() {
    return {
      steps: [
        {
          id: 1,
          image: "/cara/cakapjelas.png",
          tip: "Speak clearly 🗣",
        },
        {
          id: 2,
          image: "/cara/elakteriak.png",
          tip: "Don't yell 🤫",
        },
        {
          id: 3,
          image: "/cara/lihatmuka.jpg",
          tip: "Look at the face 😊",
        },
      ],
    };
  },
};
</script>
