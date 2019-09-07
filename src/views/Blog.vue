<template>
  <div class="blog">
    <BlogCard v-bind:blog="blog" />
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";

export default {
  name: "Blog",
  components: {
    BlogCard
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("fetchOneBlog", id);
  },
  computed: {
    blog() {
      return this.$store.getters.oneBlog;
    }
  }
};
</script>

<style>
</style>