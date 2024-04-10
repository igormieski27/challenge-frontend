<template>
  <v-app>
    <!-- Conteúdo da página -->
    <v-main class="pt-0">
      <v-container>
        <!-- Barra de navegação -->
        <v-app-bar color="white" app>
          <img
            src="https://desafiosdaeducacao.com.br/wp-content/uploads/2017/08/1grupoa.png"
            alt="Grupo A logo"
            height="50"
            class="ml-4 mt-2 mb-2"
          />
          <v-container class="font-weight-bold text-left"
            >Módulo Acadêmico</v-container
          >
          <v-container class="text-right mr-5">
            <i class="material-icons">logout</i> Sair
          </v-container>
        </v-app-bar>

        <!-- Conteúdo da página principal -->
        <component :is="currentComponent" @navigateTo="navigateTo"></component>
      </v-container>
    </v-main>
    <!-- Menu lateral -->

    <v-navigation-drawer class="d-flex flex-column" app>
      <v-container>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                Menu principal
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <hr />
          <v-list-item link @click="navigateTo('StudentList')">
            <v-list-item-content>
              <v-list-item-title class="d-flex flex-row">
                <i class="material-icons mr-2">person</i>
                <div>Alunos</div></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import StudentList from "./student/StudentList";
export default {
  name: "MainView",
  data() {
    return {
      drawer: true,
      currentComponent: null,
    };
  },
  methods: {
    navigateTo(componentName) {
      this.currentComponent = componentName;
    },
  },
  components: {
    StudentList,
  },
};
</script>
