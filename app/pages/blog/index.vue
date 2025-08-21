<script setup>
const { data: blog, pending } = useContent();
</script>

<template>
  <!-- <div>hello, this is the a blog page</div> -->
  <ContentRenderer v-if="blog" :value="blog" />
  <div v-else>Blog not found</div>
</template>
