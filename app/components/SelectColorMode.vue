<script setup>
import { ref } from "vue";

const colorMode = useColorMode();
const showDropdown = ref(false); // الحالة لعرض/إخفاء القائمة
// عند الضغط على الزر
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<template>
  <div class="relative">
    <!-- زر الأيقونة -->
    <button
      class="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      @click="toggleDropdown"
    >
      🌓
    </button>

    <!-- القائمة المنسدلة -->
    <div
      v-if="showDropdown"
      class="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-1 text-sm z-50"
    >
      <button
        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="
          $colorMode.preference = 'light';
          showDropdown = false;
        "
      >
        ☀️ Light
      </button>
      <button
        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="
          $colorMode.preference = 'dark';
          showDropdown = false;
        "
      >
        🌙 Dark
      </button>
      <button
        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="
          $colorMode.preference = 'sepia';
          showDropdown = false;
        "
      >
        📜 Sepia
      </button>
      <button
        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="
          $colorMode.preference = 'system';
          showDropdown = false;
        "
      >
        🖥️ System
      </button>
      <button
        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="
          $colorMode.preference = 'ugly';
          showDropdown = false;
        "
      >
        🤮 Ugly Mode
      </button>
    </div>
  </div>
</template>

<style scoped>
/* ممكن تضيف انميشن لاحقًا لو حبيت */
</style>
