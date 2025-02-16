<script setup lang="ts">

const main = '/'
const contacts = '/contacts'
const confidentiality = '/confidentiality'
const userAgreement = '/user_agreement'

</script>

<template>
  <footer class="foot">
    <ul class="group">
      <NuxtLink class="links" :to=main>
        <li>© 2018-2023 Платформа, все права защищены</li>
      </NuxtLink>
      <NuxtLink class="links" :to=contacts>
        <li>Контактная информация</li>
      </NuxtLink>
      <NuxtLink class="links" :to=confidentiality>
        <li>Конфиденциальность</li>
      </NuxtLink>
      <NuxtLink class="links" :to=userAgreement>
        <li>Пользовательское соглашение</li>
      </NuxtLink>
    </ul>
  </footer>
</template>

<style scoped>

.foot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92px;
  flex-shrink: 0;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #4D4A4A;
  background: #FFF;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
  box-sizing: border-box
}

.group {
  display: inline-flex;
  align-items: flex-start;
  gap: 87px;
  text-decoration: none;
}

.links {
  color: #4D4A4A;
  text-decoration: none;
}

</style>