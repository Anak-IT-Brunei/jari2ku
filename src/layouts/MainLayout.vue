<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Brunei Sign Language </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8"> Nav </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <q-footer>
      <q-tabs>
        <q-tab v-for="link in essentialLinks"
        :key="link.title"
        :label="link.title" 
        :icon="link.icon"
        v-bind="link.link"
        clickable
        exact
        />
      </q-tabs>
    </q-footer> -->
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Home",
          caption: "Home",
          icon: "home",
          link: "/",
        },
        {
          title: "About",
          caption: "More about this app",
          icon: "info",
          link: "/about",
        },
      ],
    };
  },
};
</script>
