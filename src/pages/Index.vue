<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <q-card
        v-for="s in signs"
        :key="s.subject"
        class="sign-card col-12 col-md-4"
        bordered
        flat
      >
        <q-card-section>
          <div class="text-h6">{{ s.subject }}</div>
          <q-badge color="primary"> {{ s.type }}</q-badge>
        </q-card-section>

        <q-separator />

        <q-img :src="s.images" />
        <!-- <q-card-section class="q-pt-none">
          {{ s.action }}
        </q-card-section> -->
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  computed: {
    signs: {
      get() {
        return this.$store.state.signs.signs;
      },
    },
  },
};
</script>

<style lang="sass">
.sign-card
  .q-img
    min-height: 200px
    // min-width: 250px
</style>
