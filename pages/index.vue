<script setup lang="ts">

</script>

<template>
  <PopupMenu class="popup"/>
<h1>Hello World</h1>
</template>

<style scoped>
.popup {
  position: absolute; /* Или fixed, если нужно закрепить при скролле */
  top: 251px;
  left: 80px; /* Отступ слева */;
  z-index: 1000;
}
</style>