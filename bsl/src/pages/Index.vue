<template>
  <q-page class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="s in signs" :key="s.subject">
      <img :src="s.images">

      <q-card-section>
        <div class="text-h6">{{s.subject}}</div>
        <div class="text-subtitle">{{s.type}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ s.action }}
      </q-card-section>
    </q-card>
    
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  computed: {
    signs: {
      get () {
        return this.$store.state.signs.signs
      }
    }
  }
}
</script>
