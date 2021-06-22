<template>
  <div>
    <h2>Datos de la Persona</h2>
    <v-divider></v-divider>

    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="editPersona.apellido"
        label="Apellido"
        :rules="textoRegla"
        required
      ></v-text-field>

      <v-text-field
        v-model="editPersona.nombre"
        label="Nombre"
        :rules="textoRegla"
        required
      ></v-text-field>

      <v-text-field
        v-model="editPersona.edad"
        type="number"
        label="Edad"
        :rules="textoRegla"
        required
      ></v-text-field>

      <v-text-field
        v-model="editPersona.email"
        label="Email"
        :rules="emailRegla"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="agregar">Guardar</v-btn>
      <v-btn
        color="red"
        class="mr-4"
        v-show="this.$route.params.id != null"
        @click="eliminar"
        >Eliminar</v-btn
      >
      <v-btn class="mr-4" to="/personas"> Cancelar </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    personas: [],
    valid: true,
    editPersona: {
      apellido: "",
      nombre: "",
      edad: "",
      email: "",
    },
    textoRegla: [(v) => !!v || "El campo es obligatorio"],
    emailRegla: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "No es una dirección válida",
    ],
  }),
  mounted() {
    if (this.$route.params.id != null) {
      this.editPersona = this.personas[this.$route.params.id];
    }
  },
  created() {
    let personas = JSON.parse(localStorage.getItem("personas"));

    if (personas == null) {
      this.personas = [];
    } else {
      this.personas = personas;
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    agregar() {
      this.$refs.form.validate();

      if (this.valid) {
        let index = this.$route.params.id;
        if (index != null) {
          // edición
          console.log('ediot');
          this.personas[index].apellido = this.editPersona.apellido;
          this.personas[index].nombre = this.editPersona.nombre;
          this.personas[index].edad = this.editPersona.edad;
          this.personas[index].email = this.editPersona.email;
        } else {
          this.personas.push({
            apellido: this.editPersona.apellido,
            nombre: this.editPersona.nombre,
            edad: this.editPersona.edad,
            email: this.editPersona.email,
          });
        }

        localStorage.setItem("personas", JSON.stringify(this.personas));
        this.$router.push("/personas");
      }
    },
    eliminar() {
      if (this.$route.params.id != null) {
        this.personas.splice(this.$route.params.id, 1);
        localStorage.setItem("personas", JSON.stringify(this.personas));
        this.$router.push("/personas");
      }
    },
  },
};
</script>