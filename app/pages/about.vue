<script setup lang="ts">
function enableCustomLayout() {
  setPageLayout("custom");
}
// definePageMeta({
//   layout: false,
// });
useHead({
  title: "About the Yaman King",
});

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/about").first()
);
</script>
<template>
  <div>about</div>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
