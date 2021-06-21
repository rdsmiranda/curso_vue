<template>
  <v-app-bar app color="red" dense dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Aplicacion</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
          <v-list-item-title>Cerrar Sesión</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {};
</script>
