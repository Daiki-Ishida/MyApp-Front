<template>
  <header>
    <nav class="header-content">
      <div class="header-left">
        <div class="header-logo">
          <img src="../assets/logo.png" />
        </div>
        <div class="header-title">
          <router-link to="/">My-App</router-link>
        </div>
      </div>
      <div class="header-right">
        <nav class="header-nav">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/sign-in">Login</router-link>
            </li>
            <li>
              <router-link to="/sign-up">Sign Up</router-link>
            </li>
          </ul>
        </nav>
        <div class="session-status">
          <p v-if="currentUser.id">Logged in as {{currentUser.name}}</p>
          <p v-else>
            <router-link to="/sign-up">Sign Up Now!</router-link>
          </p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

<style>
a {
  color: #fff;
}

header {
  background: #3787e2;
  color: #fff;
}

.header-content {
  max-width: 1140px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header-left,
.header-right {
  display: flex;
}

.header-logo img {
  height: 60px;
}

.header-title {
  line-height: 60px;
  font-size: 24px;
}

.header-nav li {
  display: inline-block;
  margin-right: 15px;
  line-height: 60px;
  font-weight: bold;
}

.header-nav li a {
  transition: 0.3s;
}

.header-nav li a:hover {
  color: #fef451;
}

.session-status {
  margin-left: 50px;
  line-height: 60px;
}
</style>
