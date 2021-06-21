<template>
  <div>
    <v-row align="center">
      <v-col class="d-flex" cols="4" sm="6">
        <v-select
          :items="ciudades"
          label="Temperatura en"
          @input="getTemperatura"
        ></v-select>
      </v-col>
    </v-row>
    <p  v-show="temperatura">La temperatura actual en <strong>{{ ciudad }}</strong> es <strong>{{ temperatura }} &deg;C</strong></p>
  </div>
</template>

<script>
import tempService from "../services/tempService";

export default {
  name: "Temperatura",
  data: () => ({
    temperatura: null,
    ciudad: null,
    ciudades: ["Buenos Aires", "New York", "Barcelona", "Sao Paulo"],
  }),
  mounted() {
    
  },
  methods: {
    getTemperatura(ciudad) {
      this.ciudad = ciudad;
      tempService
        .getTemperatura(ciudad)
        .then((response) => {
          this.temperatura = response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
