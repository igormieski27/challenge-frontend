<template>
  <v-app>
    <!-- Conteúdo da página -->
    <v-main>
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
        <router-view></router-view>
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
          <v-list-item link @click="navigateTo('main')">
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
export default {
  name: "MainView",
  data() {
    return {
      drawer: true, // Define se o menu lateral está aberto ou fechado
    };
  },
  methods: {
    navigateTo(routeName) {
      // Navegar para a rota específica ao clicar em um item do menu
      this.$router.push({ name: routeName });
    },
  },
};
</script>
