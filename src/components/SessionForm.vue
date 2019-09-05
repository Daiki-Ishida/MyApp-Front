<template>
  <form class="session-form" @submit.prevent="login">
    <div class="input-area">
      <label>
        <i class="fas fa-envelope"></i> Email
      </label>
      <input type="email" placeholder="Email" v-model="email" />

      <label>
        <i class="fas fa-key"></i> Password
      </label>
      <input type="password" placeholder="Password" v-model="password" />
    </div>

    <button>Login</button>
  </form>
</template>

<script>
export default {
  name: "SessionForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    if (this.$store.getters.currentUser.id) {
      this.$router.push({ path: "/" });
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    login() {
      if (this.currentUser.id == null) {
        const params = {
          email: this.email,
          password: this.password
        };
        this.$store.dispatch("login", params);
        this.$router.push({ path: "/" });
      } else {
        alert("error");
      }
    }
  }
};
</script>

<style>
.input-area {
  display: grid;
  grid-template-columns: [labels] auto [controls] 1fr;
  grid-gap: 20px;
  grid-auto-flow: row;
}

label {
  grid-column: labels;
  grid-row: auto;
  text-align: left;
  line-height: 24px;
}

input {
  grid-column: controls;
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #2c3e50;
}

input:focus {
  outline: none;
  box-shadow: none;
  border-bottom: 2px solid #3ab383;
}

button {
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  width: 150px;
  height: 50px;
  font-size: 24px;
  background: #3ab383;
  color: #fff;
  border-radius: 50px;
}
</style>