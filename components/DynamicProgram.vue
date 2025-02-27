<script setup lang="ts">
const props = defineProps<{
  title: string;
  deadline: string;
  pathImg: string;
  altImg?: string;
  firstButton?: string;
  payed?: boolean;
}>();

const emit = defineEmits(["move"]);

</script>

<template>
  <div class="box">
    <div class="icon" v-if="!pathImg"/>
    <img
        v-else
        class="icon"
        v-if="pathImg"
        :src="pathImg"
        :alt="altImg"/>
    <div class="titleBox">
      <div class="title">
        {{ title }}
      </div>
      <div class="deadline">
        {{ deadline }}
      </div>
      <div class="payed" v-if="payed">
        Куплено
      </div>
    </div>
    <div class="buttonBox">
      <button
          v-bind:class="{ 'single-button': payed, 'multiple-buttons': !payed }"
          class="more px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          v-if="!payed"
      >
        {{ firstButton || "Подробнее" }}
      </button>
      <button @click="emit('move')" :class="['pass', { 'single-button': payed, 'multiple-buttons': !payed }]">
        {{ payed ? 'Смотреть' : 'Пройти'}}
      </button>
    </div>
  </div>
</template>

<style scoped>

.box {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 1265px;
  height: 216px;
  flex-shrink: 1;
  border-radius: 21px;
  background: #FFF;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.20);
}

.icon {
  margin-left: 23px;
  width: 273px;
  height: 174px;
  flex-shrink: 1;
  border-radius: 13px;
  background: #E2DDDD;
}

.titleBox {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 30px;
  margin-left: 34px;
  gap: 30px;
  flex-shrink: 1;
}

.title {
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.deadline {
  color: #6C6969;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.buttonBox {
  display: flex;
  justify-self: end;
  align-self: end;
  gap: 24px;
  margin-bottom: 21px;
  margin-left: auto;
  margin-right: 41px;
  flex-shrink: 1;
}

.more {
  width: 246px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #148C88;
  color: #148C88;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: transparent;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, background 0.3s;
}

.more:hover {
  background: rgba(20, 140, 136, 0.1);
  transform: scale(1.05);
}

.more:active {
  transform: scale(0.95);
}

.pass {
  width: 246px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  background: #148C88;
  color: #FFF;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, background 0.3s;
}

.pass:hover {
  background: #0f6f6b; /* Немного затемняется при наведении */
  transform: scale(1.05);
}

.pass:active {
  transform: scale(0.95);
  background: #0c5a57; /* Ещё темнее при нажатии */
}

.payed {
  color: #6C6969;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 768px) {
  .box {
    flex-direction: column;
    align-items: flex-start;
    width: 460px;
    height: auto;
  }

  .icon {
    width: 430px;
    height: 150px;
    margin-left: 15px;
    margin-top: 10px;
  }

  .titleBox {
    margin-top: 15px;
    margin-left: 15px;
    gap: 10px;
  }

  .buttonBox {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 10px;
  }

  .single-button {
    width: 95%;
  }

  .multiple-buttons {
    flex: 1;
    max-width: 46%;
  }
}

@media (max-width: 394px) {
  .box {
    width: 360px;
  }

  .icon {
    width: 330px;
  }
}

</style>