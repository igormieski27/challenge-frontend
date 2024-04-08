<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mt-12 pa-12">
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            class="mx-auto"
            src="https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg"
          ></v-img>
          <v-card-title
            class="text-center"
            style="font-weight: 300; font-size: 25px; font-stretch: expanded"
            >LOGIN</v-card-title
          >
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="E-mail"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Senha"
                type="password"
                outlined
                required
              ></v-text-field>
              <v-btn
                type="submit"
                block
                color="primary"
                :disabled="!email || !password"
              >
                Login
              </v-btn>
              <v-btn
                v-on:click="register()"
                class="mt-2"
                block
                color="secondary"
              >
                Cadastro
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "../../router";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      console.log("Email:", this.email);
      console.log("Senha:", this.password);

      this.email = "";
      this.password = "";
      router.push("/main");
    },

    register() {
      router.push("/register");
    },
  },
};
</script>
