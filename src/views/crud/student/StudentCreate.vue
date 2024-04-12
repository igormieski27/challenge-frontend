<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        :is="student && student.ra"
        v-model="student.ra"
        label="RA"
        :disabled="true"
      ></v-text-field>

      <v-text-field
        v-model="student.name"
        :rules="[rules.required]"
        label="Nome"
        required
      ></v-text-field>

      <v-text-field
        v-model="student.email"
        :rules="[rules.required, rules.email]"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        ref="cpf"
        v-model="student.cpf"
        v-maska:[cpfMask]
        :rules="[rules.required, rules.cpf]"
        label="CPF"
        required
      ></v-text-field>

      <v-btn size="large" :disabled="!valid" color="secondary" @click="submit">
        Salvar
      </v-btn>
      <v-btn color="primary" @click="cancel()"> Cancelar </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
import { vMaska } from "maska";

export default {
  directives: { maska: vMaska },
  name: "StudentForm",
  props: ["item"],
  data: () => ({
    valid: true,
    edit: false,
    student: {
      ra: "",
      name: "",
      email: "",
      cpf: "",
    },
    cpfMask: { mask: "###.###.###-##" },
    rules: {
      required: (value) => !!value || "Obrigatório.",
      email: (value) => /.+@.+\..+/.test(value) || "E-mail inválido.",
      cpf: (value) => {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return (
          regex.test(value) || "CPF inválido. Formato esperado: 000.000.000-00"
        );
      },
    },
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (this.edit) {
          axios
            .put(
              "http://localhost:3000/students/" + this.student.ra,
              this.student
            )
            .then((response) => {
              console.log(response.data);
              alert("Aluno editado com sucesso!");
              this.student = {
                RA: "",
                name: "",
                email: "",
                cpf: "",
              };
              this.changeComponent("StudentList");
            })
            .catch((error) => {
              console.error("There was an error!", error);
              alert("Ocorreu um erro ao editar o aluno.");
            });
        }
        if (!this.edit) {
          axios
            .post("http://localhost:3000/students", this.student)
            // eslint-disable-next-line
            .then((response) => {
              alert("Aluno cadastrado com sucesso!");
              this.student = {
                RA: "",
                name: "",
                email: "",
                cpf: "",
              };
              this.changeComponent("StudentList");
            })
            .catch((error) => {
              console.error("There was an error!", error);
              alert("Ocorreu um erro ao cadastrar o aluno.");
            });
        }
      }
    },

    cancel() {
      this.student = {
        RA: "",
        name: "",
        email: "",
        cpf: "",
      };
      this.changeComponent("StudentList");
    },

    changeComponent(componentName) {
      this.$emit("navigateTo", componentName);
    },
  },

  mounted() {
    if (this.item && this.item.ra) {
      this.edit = true;
      this.student = this.item;
    }
  },
};
</script>

<style>
/* Adicione estilos personalizados, se necessário */
</style>
