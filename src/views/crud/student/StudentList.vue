<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div style="display: flex; flex-direction: row; padding: 10px">
          <h4>Consulta de Alunos</h4>
        </div>
        <hr />
        <div style="display: flex">
          <v-text-field
            label="Buscar aluno"
            single-line
            hide-details
          ></v-text-field>
          <v-btn color="primary" icon @click="deleteStudent(student.id)">
            <i class="material-icons">search</i>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <v-data-table
      :headers="headers"
      :items="students"
      :sort-by="[{ key: 'ra', order: 'asc' }]"
      :search="search"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="me-2 edit-icon" @click="editItem(item)"
          >mdi-pencil</v-icon
        >
        <v-icon class="delete-icon" @click="deleteItem(item)"
          >mdi-delete</v-icon
        >
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "StudentList",
  data() {
    return {
      search: "",
      students: [
        { ra: 123456, name: "Ana Silva", cpf: "123.456.789-00" },
        { ra: 123457, name: "Carlos Pereira", cpf: "987.654.321-00" },
        { ra: 123456, name: "Ana Silva", cpf: "123.456.789-00" },
        { ra: 123457, name: "Carlos Pereira", cpf: "987.654.321-00" },
        { ra: 123456, name: "Ana Silva", cpf: "123.456.789-00" },
        { ra: 123457, name: "Carlos Pereira", cpf: "987.654.321-00" },
        { ra: 123456, name: "Ana Silva", cpf: "123.456.789-00" },
        { ra: 123457, name: "Carlos Pereira", cpf: "987.654.321-00" },
        { ra: 123456, name: "Ana Silva", cpf: "123.456.789-00" },
        { ra: 123457, name: "Carlos Pereira", cpf: "987.654.321-00" },
        { ra: 123456, name: "Ana Silva", cpf: "123.456.789-00" },
        { ra: 123457, name: "Carlos Pereira", cpf: "987.654.321-00" },
        // Adicione mais estudantes conforme necessário
      ],
      headers: [
        {
          title: "RA",
          align: "start",
          key: "ra",
        },
        { title: "Nome", key: "name" },
        { title: "CPF", key: "cpf", sortable: false },
        { title: "Ações", key: "actions", sortable: false },
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
