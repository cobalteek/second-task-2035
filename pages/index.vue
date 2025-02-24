<script setup lang="ts">
const getHourText = (hours: number) => {
  if (hours % 10 === 1 && hours % 100 !== 11) return `${hours} час`;
  if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100)) return `${hours} часа`;
  return `${hours} часов`;
};

const allPrograms = ref([
  ...Array.from({ length: 28 }, (_, i) => {
    const hours = Math.floor(Math.random() * 24) + 1;
    return {
      title: `Программа ${i + 1}`,
      deadline: getHourText(hours),
      pathImg: "",
      altImg: "",
      payed: false
    };
  })
]);

const myPrograms = ref([
  { title: "Школа трекеров", deadline: "12-24 ноября", pathImg: "/images/myProgram.svg", altImg: "Изображение программы", payed: true },
]);

const activeTab = ref("all");
const currentPage = ref(1);
const itemsPerPage = 4;

const programField = computed(() => (activeTab.value === "all" ? allPrograms.value : myPrograms.value));
const totalPages = computed(() => Math.ceil(programField.value.length / itemsPerPage));

const paginatedPrograms = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return programField.value.slice(start, start + itemsPerPage);
});

function moveProgram(index: number) {
  if (activeTab.value === "all") {
    const program = allPrograms.value.splice(index, 1)[0];
    program.payed = !program.payed;
    myPrograms.value.push(program);
  } else {
    const program = myPrograms.value.splice(index, 1)[0];
    program.payed = !program.payed;
    allPrograms.value.push(program);
  }
}

const displayedPages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  pages.push(1);
  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) pages.push("...");
  pages.push(total);

  return pages;
});
</script>

<template>
  <div class="program">
    <Buttons class="buttons" v-model:active-tab="activeTab" @click="currentPage = 1"/>
    <DynamicProgram v-for="(field, index) in paginatedPrograms" :key="index" v-bind="field" @move="moveProgram(index)" />

    <p class="notFound" v-if="programField.length < 1">
      {{ activeTab === 'all' ? "Нет доступных программ" : "Нет активных программ" }}
    </p>

    <div class="pagination" v-if="totalPages > 1">
      <button v-for="page in displayedPages" :key="page" @click="page !== '...' ? (currentPage = page) : null" :class="{ active: currentPage === page }">
        {{ page }}
      </button>
    </div>
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
  width: 100%;
}

.notFound {
  color: #888;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.pagination {
  align-self: flex-end;
  display: flex;
  gap: 5px;
  margin-right: 80px;
}

.pagination button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  color: #000;
  text-align: center;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.pagination button.active {
  font-weight: 600;
}
</style>