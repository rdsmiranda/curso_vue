<template>
  <div>
    <h2>Personas</h2>
    <v-divider></v-divider>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Apellido</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Edad</th>
            <th class="text-left">Email</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(persona, index) in personas" :key="index">
            <td>{{ persona.apellido }}</td>
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.edad }}</td>
            <td>{{ persona.email }}</td>
            <td><v-btn :to="{ name: 'personas_editar', params: { id: index }}">Editar</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-btn elevation="2" class="mt-5" to="/personas/edit">Agregar</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personas: [],
    };
  },
  mounted() {
    if (localStorage.getItem("personas")) {
      try {
        this.personas = JSON.parse(localStorage.getItem("personas"));
      } catch (e) {
        localStorage.removeItem("personas");
      }
    }
  },
};
</script>