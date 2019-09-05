<template>
  <header>
    <nav class="header-content">
      <div class="header-left">
        <div class="header-logo">
          <img src="../assets/logo.png" />
          My-App
        </div>
      </div>
      <div class="header-right">
        <nav>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    <p v-if="user.id">Now logged in as {{user.name}}</p>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    user() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

<style>
header {
  background: #3ab383;
  color: #fff;
}

.header {
  max-width: 1140px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header-logo {
  line-height: 60px;
  font-size: 24px;
}

.header-logo img {
  height: 60px;
}

nav ul li {
  display: inline;
  margin-right: 15px;
  line-height: 60px;
}

li a {
  color: #fff;
}
</style>
