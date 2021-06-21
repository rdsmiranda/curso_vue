<template>
  <v-app>
    <!-- punto de montaje para vuetify, es requerido para todas las aplicaciones y debe renderizarse una única vez en toda la aplicación -->
    <AppBar />
    <NavBar />
    <v-main app>
      <v-container fluid> <router-view></router-view></v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./AppBar.vue";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    AppBar,
    NavBar,
    Footer,
  },
};
</script>