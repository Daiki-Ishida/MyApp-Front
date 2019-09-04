<template>
  <div class="users">
    <div class="users-table">
      <UsersTable />
    </div>
  </div>
</template>

<script>
import UsersTable from "../components/UsersTable";

export default {
  name: "Users",
  components: {
    UsersTable
  }
};
</script>

<style scoped>
.users-table {
  margin: 0 auto;
}
</style>