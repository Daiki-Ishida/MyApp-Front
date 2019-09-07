<template>
  <div class="blogs">
    <h1 class="title">Blogs</h1>
    <div class="blog-list">
      <div class="blog" v-for="blog in blogs" v-bind:key="blog.id">
        <BlogCard v-bind:blog="blog" />
      </div>
    </div>
    <div class="create-btn">
      <FixedBtn v-bind:content="content" />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
import FixedBtn from "../components/FixedBtn";

export default {
  name: "Blogs",
  components: {
    BlogCard,
    FixedBtn
  },
  created() {
    this.$store.dispatch("fetchAllBlogs");
  },
  data() {
    return {
      content: "Create New Post!"
    };
  },
  computed: {
    blogs() {
      return this.$store.getters.allBlogs;
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

.blog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog {
  margin: 20px;
}

.create-btn {
  position: fixed;
  bottom: 60px;
  right: 120px;
}

.create-btn button {
  background-color: #ee7768;
}
</style>