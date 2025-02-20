<script setup lang="ts">
const props = defineProps<{
  title: string;
  deadline: string;
  pathImg: {
    type: string,
    default: null,
  },
  altImg?: string;
  firstButton?: string
  payed?: boolean
}>();

const emit = defineEmits(["move"]);

</script>

<template>
  <div class="box">
    <div class="icon">
      <img
          v-if="pathImg"
          :src="pathImg"
          :alt="altImg"/>
    </div>
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
      <button class="more" v-if="!payed">
        {{ firstButton || "Подробнее" }}
      </button>
      <button @click="emit('move')" class="pass">
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
  flex-shrink: 0;
  border-radius: 21px;
  background: #FFF;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.20);
}
.icon {
  margin-left: 23px;
  width: 273px;
  height: 174px;
  flex-shrink: 0;
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
}

.pass {
  width: 246px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 8px;
  border: #148C88;
  background: #148C88;
  color: #FFF;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.payed {
  color: #6C6969;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

</style>