<template>
  <div class="sign-up">
    <h1 class="title">Sign Up</h1>
    <div class="sign-up-form">
      <UserForm v-bind:user="user" v-on:user-form-input="createUser" />
    </div>
  </div>
</template>

<script>
import UserForm from "../components/UserForm";

export default {
  name: "SignUp",
  data() {
    return {
      user: {}
    };
  },
  components: {
    UserForm
  },
  methods: {
    createUser(user) {
      this.$store.dispatch("signUp", user);
      this.$router.push({ path: "/users" });
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 36px;
  padding: 20px;
  border-bottom: 2px solid #3ab383;
}
.sign-up-form {
  max-width: 60%;
  margin: 0 auto;
  padding: 50px;
}
</style>