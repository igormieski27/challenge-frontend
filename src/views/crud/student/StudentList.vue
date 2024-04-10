<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div style="padding: 10px">
          <h4>Consulta de Alunos</h4>
        </div>
        <hr />
      </v-col>
    </v-row>
    <v-card style="border: none; box-shadow: none">
      <template v-slot:text>
        <div style="display: flex; align: center">
          <v-text-field
            v-model="search"
            label="Pesquisar aluno (RA, Nome ou CPF)"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
            class="w-50"
          ></v-text-field>

          <v-btn
            class="w-20 ml-2 mt-2"
            color="accent"
            prepend-icon="mdi-account-plus"
            @click="changeComponent('StudentCreate')"
          >
            <template v-slot:prepend>
              <v-icon></v-icon>
            </template>
            Cadastrar Aluno
          </v-btn>
        </div>
      </template>
      <v-data-table
        :headers="headers"
        :items="students"
        :sort-by="[{ key: 'ra', order: 'asc' }]"
        :search="search"
        class="text-left"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn size="small" class="mr-2 edit-icon" icon v-bind="props">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </template>
            <span>Editar</span>
          </v-tooltip>
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn
                size="small"
                icon
                v-bind="props"
                @click="editStudent(item)"
                class="delete-icon"
              >
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </template>
            <span>Remover</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
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
      currentComponent: null,
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
    changeComponent(componentName) {
      this.$emit("navigateTo", componentName);
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
}

.delete-icon:hover {
  color: red; /* Color change on hover */
}
</style>
