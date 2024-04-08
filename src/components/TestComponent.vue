<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="formData.name" label="Name"></v-text-field>
      <v-text-field v-model="formData.email" label="Email"></v-text-field>
      <v-text-field v-model="formData.phone" label="Phone"></v-text-field>
      <v-textarea v-model="formData.message" label="Message"></v-textarea>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Here you can handle the form submission, for example, send the data to the server
      console.log("Form submitted with data:", this.formData);
    },
  },
};
</script>
