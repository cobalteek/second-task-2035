<script setup lang="ts">

</script>

<template>
  <div class="popup">
    <p class="links top">ПРОГРАММЫ</p>
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

.links.top {
  margin-top: 75px;
  color: red;
}

@media (max-width: 1600px) {
  .popup {
    width: 295px;
    height: 386px;
  }

  .links.top {
    margin-top: 63px;
  }
}

@media (max-width: 1450px) {
  .popup {
    width: 255px;
    height: 356px;
    gap: 65px;
    font-size: 24px;
  }

  .links {
    padding-left: 46px;
  }

  .links.top {
    margin-top: 53px;
  }
}

@media (max-width: 1280px) {
  .popup {
    width: 205px;
    height: 306px;
    gap: 55px;
    font-size: 20px;
  }

  .links {
    padding-left: 36px;
  }

  .links.top {
    margin-top: 48px;
  }
}
</style>