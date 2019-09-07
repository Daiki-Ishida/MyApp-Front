<template>
  <button class="fixed-btn">{{content}}</button>
</template>

<script>
export default {
  name: "FixedBtn",
  props: ["content"]
};
</script>

<style scoped>
.fixed-btn {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 16px;
  color: #fff;
}

.fixed-btn:focus {
  outline: none;
}
</style>