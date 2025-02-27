<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}

</script>

<template>
  <section class="top-nav">
    <label class='menu-button-container' for="menu-toggle">
      <div @click="toggleMenu" class='menu-button'></div>
    </label>
    <ul class="menu" v-if="isOpen">
      <li>
        <button @click="toggleMenu">
          Программы
        </button>
      </li>
      <li>
        <button @click="toggleMenu">
        Профиль
      </button>
      </li>
      <li>
        <button @click="toggleMenu">
          Сертификаты
        </button>
      </li>
    </ul>
    <div class="group">
      <img alt="Тут звоночек" class="bell" src="../public/images/bell.svg">
      <img alt="Тут профиль" class="profile" src="../public/images/profile.svg">
    </div>
  </section>
</template>

<style scoped>

* {
  box-sizing: border-box;
}

.top-nav {
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #332f37;
  color: #FFF;
  height: 51px;
  padding: 1em;
  width: 100%;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.bell {
  height: 35px;
}

.profile {
  height: 45px;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

button {
  background-color: #332f37;
  color: #FFFFFF;
  border: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 768px) {

  .menu-button-container, .top-nav {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #332f37;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}

</style>