<script setup lang="ts">

</script>

<template>
  <div class="page-container">
    <Header/>
    <PopupMenu class="popup"/>
      <main class="content-wrap">
        <slot />
      </main>
    <Footer />
  </div>
</template>

<style lang="scss">

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrap {
  flex: 1; /* Растягиваем контент, чтобы футер прижимался к низу */
  display: flex;
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center;     /* Центрирование по вертикали */
  width: 100%;
  padding: 0;
  margin: 0;
}

.popup {
  position: absolute; /* Или fixed, если нужно закрепить при скролле */
  top: 251px;
  left: 80px; /* Отступ слева */;
  z-index: 1000;
}


</style>