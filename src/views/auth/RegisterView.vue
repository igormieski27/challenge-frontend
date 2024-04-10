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
            >CADASTRO</v-card-title
          >
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="user.name"
                label="Nome"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="user.email"
                label="E-mail"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                label="Senha"
                type="password"
                outlined
                required
                :rules="[passwordRules]"
              ></v-text-field>
              <v-text-field
                v-model="user.confirmPassword"
                label="Confirmar Senha"
                type="password"
                outlined
                required
                :rules="[confirmPasswordRules]"
              ></v-text-field>
              <v-btn
                type="submit"
                block
                color="primary"
                :disabled="
                  !user.name ||
                  !user.email ||
                  !user.password ||
                  !user.confirmPassword
                "
              >
                Cadastrar
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
  name: "RegisterView",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    passwordRules() {
      return [
        (value) => !!value || "Senha é obrigatória",
        (value) =>
          (value && value.length >= 8) ||
          "Senha precisa ter no mínimo 8 caracteres",
        (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(
            value
          ) ||
          "Senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número, um caractere especial e não deve conter espaços",
      ];
    },
    confirmPasswordRules() {
      return [
        (value) => !!value || "Por favor, confirme sua senha",
        (value) => value === this.user.password || "As senhas não coincidem",
      ];
    },
  },
  methods: {
    register() {
      const { name, email, password, confirmPassword } = this.user;

      if (!name || !email || !password || !confirmPassword) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      console.log("Nome:", name);
      console.log("Email:", email);
      console.log("Senha:", password);
      console.log("Confirmação de Senha:", confirmPassword);

      this.user.name = "";
      this.user.email = "";
      this.user.password = "";
      this.user.confirmPassword = "";
      router.push("/");
    },
  },
};
</script>
