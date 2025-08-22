<script setup>
const { data: post, pending } = useContent();
</script>

<template>
  <!-- <div>hello, this is the a post page</div> -->
  <ContentRenderer v-if="post" :value="post" />
  <div v-else>post not found</div>
</template>
