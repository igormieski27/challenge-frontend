<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4>Consulta de Alunos</h4>
        <v-icon icon="mdi-home" />
        <v-icon icon="mdi-home" />
        <v-icon icon="mdi-home" />
        <v-text-field
          v-model="search"
          label="Buscar aluno"
          single-line
          hide-details
        ></v-text-field>
        <v-btn color="primary">Cadastrar Aluno</v-btn>
        <v-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Registro Acadêmico</th>
                <th class="text-center">Nome</th>
                <th class="text-center">CPF</th>
                <th class="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.ra }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.cpf }}</td>
                <td>
                  <v-btn
                    color="secondary"
                    icon
                    class="mr-2"
                    @click="editStudent(student.id)"
                  >
                    <i class="material-icons">edit</i>
                  </v-btn>
                  <v-btn
                    color="primary"
                    icon
                    @click="deleteStudent(student.id)"
                  >
                    <i class="material-icons">delete</i>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StudentList",
  data() {
    return {
      search: "",
      students: [
        { id: 1, ra: "123456", name: "Ana Silva", cpf: "123.456.789-00" },
        { id: 2, ra: "654321", name: "Carlos Pereira", cpf: "987.654.321-00" },
        // Adicione mais estudantes conforme necessário
      ],
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
</style>
