<script setup lang="ts">
const path = '/'
</script>

<template>
  <header>
    <div class="head">
      <div class="logo">
        <NuxtLink class="link" :to="path">
          ЛОГОТИП
        </NuxtLink>
      </div>
      <div class="group">
        <img alt="Тут звоночек" class="bell" src="../public/images/bell.svg">
        <img alt="Тут профиль" class="profile" src="../public/images/profile.svg">
      </div>
    </div>
    <div class="name">
      <p>Иванов Иван</p>
    </div>
  </header>
</template>

<style scoped>

header {

  background: #148c88;
  width: 100%;
  height: 400px;
}

.name {
  margin: 0 0 0 0;
  position: absolute;
  top: 254px;
  left: 535px;
  color: #FFF;
  font-family: "Montserrat", serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #332f37;
}

.logo {
  margin: 5%;
  font-weight: 400;
  font-size: 32px;
  color: #fff;
}

.group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 38px;
  margin-right: 82px;
}

.bell {
  display: flex;
  width: 46px;
  height: 49px;
  padding-right: 4.6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.profile {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
}

.link {
  text-decoration: none;
  color: #fff;
}


</style>