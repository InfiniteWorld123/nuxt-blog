<script setup lang="ts">
const { data } = useContent();
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>Data not found</div>
</template>
