<template>
  <div class="blog-card">
    <div class="card-head">
      <img src="../assets/sample_2.jpg" class="blog-img" />
    </div>
    <div class="card-content">
      <div class="blog-overview">
        <div class="author-info">
          <img src="../assets/testuser.jpg" class="author-img" />
          <p class="author-name">{{blog.user.name}}</p>
        </div>
        <div class="blog-info">
          <p>{{issuedAt}}</p>
        </div>
      </div>
      <div class="blog-content">{{blog.content}}</div>
    </div>
    <div class="card-actions">
      <a href="/">Show More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["blog"],
  // methods: {
  //   getRandomInt(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min)) + min;
  //   }
  // },
  computed: {
    issuedAt() {
      const date = new Date(this.blog.created_at);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const hour = date.getHours();
      const min = date.getMinutes();
      return `${year}/${month}/${day} ${hour}:${min}`;
    }
    // samplePicture() {
    //   this.getRandomInt(1, 4);
    // }
  }
};
</script>

<style scoped>
.blog-card {
  width: 400px;
  background-color: #f2f2f2;
  border: 1px solid #99aab5;
  border-radius: 5px;
}

.blog-img {
  border-radius: 5px 5px 0 0;
  width: 400px;
}

.card-content {
  padding: 30px;
}

.blog-overview {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.author-info {
  display: flex;
}

.author-img {
  border-radius: 50%;
  height: 70px;
  width: 70px;
}

.author-name {
  line-height: 70px;
  margin-left: 15px;
}

.blog-info {
  line-height: 70px;
}

.card-actions {
  text-align: center;
  margin-bottom: 30px;
}

.card-actions a {
  color: #21467d;
  border: 1px solid #21467d;
  border-radius: 5px;
  padding: 5px;
}

.card-actions a:hover {
  background-color: #21467d;
  color: #fff;
  font-weight: bold;
}
</style>