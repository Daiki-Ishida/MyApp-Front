<template>
  <form class="user-form" @submit.prevent="userFormInput">
    <div class="input-area">
      <label>
        <i class="fas fa-user"></i> User Name
      </label>
      <input type="text" placeholder="User Name" v-model="user.name" />

      <label>
        <i class="fas fa-envelope"></i> Email
      </label>
      <input type="email" placeholder="Email" v-model="user.email" />

      <label>
        <i class="fab fa-hubspot"></i> Postal Code
      </label>
      <input type="number" placeholder="Postal Code" v-model="user.postal_code" />

      <label>
        <i class="fas fa-map"></i> Postal Address
      </label>
      <input type="text" placeholder="Postal Address" v-model="user.postal_address" />

      <label>
        <i class="fas fa-key"></i> Password
      </label>
      <input type="password" placeholder="Password" v-model="user.password" />

      <label>
        <i class="fas fa-key"></i> Password Confirmation
      </label>
      <input
        type="password"
        placeholder="Password Confirmation"
        v-model="user.password_confirmation"
      />
    </div>

    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  props: ["user"],
  methods: {
    userFormInput() {
      this.$emit("user-form-input", this.user);
    }
  }
};
</script>

<style scoped>
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