<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container class="d-flex flex-column">
        <v-text-field
          class="shrink"
          :is="edit"
          v-model="student.ra"
          label="RA"
          :disabled="true"
        ></v-text-field>

        <v-text-field
          v-model="student.name"
          :rules="[rules.required]"
          label="Nome *"
          required
        ></v-text-field>

        <v-text-field
          v-model="student.email"
          :rules="[rules.required, rules.email]"
          label="E-mail *"
          required
        ></v-text-field>

        <v-text-field
          ref="cpf"
          v-model="student.cpf"
          v-maska:[cpfMask]
          :rules="[rules.required, rules.cpf]"
          label="CPF *"
          required
        ></v-text-field>
        <v-container class="d-flex flex-column">
          <v-btn
            class="w-25 mx-auto"
            size="large"
            :disabled="!valid"
            color="secondary"
            @click="submit"
          >
            Salvar
          </v-btn>
          <v-btn class="w-20 mx-auto mt-2" color="primary" @click="cancel()">
            Cancelar
          </v-btn>
        </v-container>
      </v-container>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ snackBarText }}

        <template v-slot:actions>
          <v-btn color="blue" variant="text" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-form>
  </v-container>
</template>

<script>
import { vMaska } from "maska";
import StudentService from "../../../services/StudentsService.js";

export default {
  directives: { maska: vMaska },
  name: "StudentForm",
  props: ["item"],
  data: () => ({
    valid: true,
    edit: false,
    snackbar: false,
    snackBarText: "",
    student: {
      ra: "",
      name: "",
      email: "",
      cpf: "",
    },
    cpfMask: { mask: "###.###.###-##" },
    rules: {
      required: (value) => !!value || "(*) Campo obrigatório.",
      email: (value) => /.+@.+\..+/.test(value) || "(*) E-mail inválido.",
      cpf: (value) => {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return (
          regex.test(value) ||
          "(*) CPF inválido. Formato esperado: 000.000.000-00"
        );
      },
    },
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (this.edit) {
          // Usando o serviço StudentService para fazer a requisição PUT
          // eslint-disable-next-line
          StudentService.updateStudent(this.student.ra, this.student)
            .then((response) => {
              console.log(response.data);
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
        } else {
          // Usando o serviço StudentService para fazer a requisição POST
          // eslint-disable-next-line
          StudentService.createStudent(this.student)
            .then((response) => {
              console.log(response.data);

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
