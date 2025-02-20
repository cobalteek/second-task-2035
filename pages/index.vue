<script setup lang="ts">
const allPrograms = ref([
  { title: "Программа 1", deadline: "12-24 ноября", pathImg: "", altImg: "", payed: false},
  { title: "Программа 2", deadline: "12 часов", pathImg: "", altImg: "", payed: false },
  { title: "Программа 3", deadline: "12 часов", pathImg: "", altImg: "", payed: false },
  { title: "Программа 4", deadline: "20 часов", pathImg: "", altImg: "", payed: false },
  { title: "Программа 5", deadline: "8 часов", pathImg: "", altImg: "", payed: false },
]);

const myPrograms = ref([
  { title: "Школа трекеров", deadline: "12-24 ноября", pathImg: "/images/myProgram.svg", altImg: "Изображение программы", payed: true },
]);

const activeTab = ref("all"); // Храним выбранную вкладку
const programField = computed(() => (activeTab.value === "all" ? allPrograms.value : myPrograms.value));

function moveProgram(index: number) {
  if (activeTab.value === "all") {
    const program = allPrograms.value.splice(index, 1)[0]; // Удаляем из allPrograms
    program.payed = !program.payed
    myPrograms.value.push(program); // Добавляем в myPrograms
  } else {
    const program = myPrograms.value.splice(index, 1)[0]; // Удаляем из myPrograms
    program.payed = !program.payed
    allPrograms.value.push(program); // Добавляем в allPrograms
  }
}

</script>

<template>
  <div class="program">
    <Buttons class="buttons"
      v-model:active-tab="activeTab"
    />
    <DynamicProgram
       v-for="(field, index) in programField"
       :key="index"
       v-bind="field"
       @move="moveProgram(index)"
    />
    <p class="notFound"
      v-if="programField.length < 1"
    >
      Нет активных программ
    </p>
  </div>
</template>

<style scoped>

.program {
  display: flex;
  align-self: start;
  flex-direction: column;
  gap: 45px;
  margin-left: 503px;
  margin-bottom: 29px;
}

.notFound {
  color: #888;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

</style>