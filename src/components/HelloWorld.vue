<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 class="top-msg">
      This is the sample application made with Vue.js in frontend and Ruby on Rails
      in backend, in which you will be able to make a post and share it between users.
    </h2>
    <h2>Links</h2>
    <ul>
      <li>
        <router-link to="/blogs">Blogs</router-link>
      </li>
    </ul>
    <h2>My Work</h2>
    <ul>
      <li>
        <a href="https://github.com/Daiki-Ishida" target="_blank">Github</a>
      </li>
    </ul>
    <h2>Vue.js Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br />
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to MyApp!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
  padding-top: 30px;
}
.top-msg {
  max-width: 600px;
  margin: 0 auto;
  line-height: 36px;
}

h1 {
  font-size: 56px;
  padding: 30px;
}
h2 {
  font-weight: normal;
  font-size: 24px;
  padding: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
