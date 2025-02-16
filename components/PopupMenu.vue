<script setup lang="ts">

</script>

<template>
  <div class="popup">
    <p class="links" style="color: red; margin-top: 75px">ПРОГРАММЫ</p>
    <p class="links">ПРОФИЛЬ</p>
    <p class="links">СЕРТИФИКАТЫ</p>
  </div>
</template>

<style scoped>

.popup{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 72px;
  width: 395px;
  height: 518px;
  flex-shrink: 0;
  border-radius: 21px;
  background: #FFF;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.20);
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.links {
  margin: 0 0 0 0;
  padding-left: 54px;
}
</style>