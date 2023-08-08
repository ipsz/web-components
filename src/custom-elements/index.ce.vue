<template>
  <div class="kefu" @click="openkefu">客服1</div>
  <div class="kefu-content" v-if="show">
    <img :src="A" alt="" />
  </div>
</template>

<script setup>
import A from "@/assets/1.jpeg";
import { ref } from "vue";
  const show = ref(false)
  const openkefu = () => {
    show.value = !show.value;
  };
</script>

<style scoped>
.kefu {
  padding: 10px;
  position: fixed;
  bottom: 0;
  right: 10px;
  color: red;
  cursor: pointer;
}
.kefu:hover{
  color: green;
}
.kefu-content{
  position: fixed;
  bottom: 30px;
  background: red;
  right: 10px;
}
</style>
