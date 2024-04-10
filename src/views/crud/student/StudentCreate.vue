<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div style="display: flex; flex-direction: row; padding: 10px">
          <h4>Cadastro de Aluno</h4>
        </div>
        <hr />
      </v-col>
    </v-row>
    <v-card-text>
      <v-form @submit.prevent="register">
        <v-text-field
          v-model="newStudent.name"
          label="Nome"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="newStudent.email"
          label="E-mail"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="newStudent.cpf"
          label="Senha"
          type="password"
          outlined
          required
        ></v-text-field>
        <v-btn
          type="submit"
          block
          color="primary"
          :disabled="!newStudent.name || !newStudent.email || !newStudent.cpf"
        >
          Cadastrar
        </v-btn>
      </v-form>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: "StudentCreate",
  data() {
    return {
      newStudent: {
        name: "",
        email: "",
        cpf: "",
      },
    };
  },
  methods: {
    editStudent(id) {
      // Lógica para editar estudante
      alert(`Editar estudante ${id}`);
    },
    deleteStudent(id) {
      // Lógica para remover estudante
      alert(`Remover estudante ${id}`);
    },
  },
};
</script>

<style scoped>
/* Adicione seus estilos aqui. Exemplo: */
.table-actions button {
  margin-right: 8px;
}

.v-icon {
  transition: all 0.3s ease; /* Smooth transition for size and color */
}

.edit-icon:hover {
  color: #2266ff; /* Color change on hover */
  transform: scale(1.2); /* Slightly larger */
}

.delete-icon:hover {
  color: red; /* Color change on hover */
  transform: scale(1.2); /* Slightly larger */
}
</style>
