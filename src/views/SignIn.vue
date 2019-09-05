<template>
  <div class="sign-in">
    <h1 class="title">Login</h1>
    <div class="session-form">
      <SessionForm />
    </div>
  </div>
</template>

<script>
import SessionForm from "../components/SessionForm";
export default {
  name: "SignIn",
  components: {
    SessionForm
  }
};
</script>

<style>
.title {
  font-size: 36px;
  padding: 20px;
  border-bottom: 2px solid #3ab383;
}
.session-form {
  max-width: 60%;
  margin: 0 auto;
  padding: 30px;
}
</style>