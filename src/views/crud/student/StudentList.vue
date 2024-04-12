<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div style="padding: 10px; display: flex">
          <v-icon class="mr-2">mdi-account-search</v-icon>
          <h3>Consulta de Alunos</h3>
          <v-btn
            class="w-20 mr-2 mb-auto ml-auto"
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
          ></v-text-field>
        </div>
      </template>
      <v-data-table
        :headers="headers"
        :items="students"
        :sort-by="[{ key: 'ra', order: 'desc' }]"
        :search="search"
        class="text-left"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn
                size="small"
                class="mr-2 edit-icon"
                icon
                v-bind="props"
                @click="editStudent(item)"
              >
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
                @click="deleteStudent(item)"
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
import StudentService from "../../../services/StudentsService.js";
export default {
  name: "StudentList",
  data() {
    return {
      search: "",
      students: [],
      headers: [
        {
          title: "RA",
          align: "start",
          key: "ra",
        },
        { title: "Nome", key: "name" },
        { title: "CPF", key: "cpf", sortable: false },
        { title: "E-mail", key: "email", sortable: false },
        { title: "Ações", key: "actions", sortable: false },
      ],
      currentComponent: null,
    };
  },
  methods: {
    changeComponent(componentName) {
      this.$emit("navigateTo", componentName);
    },

    async fetchStudents() {
      try {
        const response = await StudentService.getStudents();
        this.students = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async deleteStudent(item) {
      if (confirm("Deseja remover o aluno " + item.name + "?") == true) {
        try {
          await StudentService.deleteStudent(item.ra);
          this.fetchStudents();
        } catch (error) {
          console.error(error);
        }
      }
    },

    editStudent(item) {
      this.$emit("navigateTo", "StudentCreate", item);
    },
  },
  mounted() {
    this.fetchStudents();
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
