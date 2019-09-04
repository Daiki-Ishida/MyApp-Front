<template>
  <table class="users-table">
    <thead>
      <tr>
        <th class="id">ID</th>
        <th class="comment">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" v-bind:key="user.id">
        <th>{{user.id}}</th>
        <td>{{user.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UsersTable",
  created() {
    this.$store.dispatch("fetchAllUsers");
  },
  computed: {
    users() {
      return this.$store.getters.allUsers;
    }
  }
};
</script>

<style>
</style>