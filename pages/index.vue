<script setup lang="ts">
const getHourText = (hours: number) => {
  if (hours % 10 === 1 && hours % 100 !== 11) return `${hours} час`;
  if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100)) return `${hours} часа`;
  return `${hours} часов`;
};

const allPrograms = useState('allPrograms', () => {
  return Array.from({ length: 28 }, (_, i) => {
    const hours = Math.floor(Math.random() * 24) + 1;
    return {
      title: `Программа ${i + 1}`,
      deadline: getHourText(hours),
      pathImg: "",
      altImg: "",
      payed: false
    };
  });
});


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
  const globalIndex = (currentPage.value - 1) * itemsPerPage + index;

  if (activeTab.value === "all") {
    const program = allPrograms.value.splice(globalIndex, 1)[0];
    program.payed = !program.payed;
    myPrograms.value.push(program);
  } else {
    const program = myPrograms.value.splice(globalIndex, 1)[0];
    program.payed = !program.payed;
    allPrograms.value.push(program);
  }

  if (currentPage.value > 1 && paginatedPrograms.value.length === 0) {
    currentPage.value--;
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

watch(currentPage, () => {
  const targetElement = document.querySelector('.buttons')
  if (!targetElement) return

  const scrollDuration = 250; // Уменьшенная длительность
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const scrollStep = (targetPosition - window.scrollY) / (scrollDuration / 15);

  const scrollInterval = setInterval(() => {
    if (Math.abs(window.scrollY - targetPosition) > Math.abs(scrollStep)) {
      window.scrollBy(0, scrollStep);
    } else {
      window.scrollTo(0, targetPosition);
      clearInterval(scrollInterval);
    }
  }, 15);
})


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
  margin-left: 30%;
  margin-bottom: 29px;
  width: 70%;
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

@media (max-width: 1280px) {
  .program {
    margin-left: 250px;
  }
}

@media (max-width: 1150px) {
  .buttons {
    margin-left: 40px;
  }
}

@media (max-width: 1050px) {
  .buttons {
    margin-left: 0;
  }
  .program {
    margin-left: 290px;
  }
}

@media (max-width: 830px) {
  .buttons {
    margin-left: 0;
  }
  .program {
    justify-content: center;

    margin-left: 310px;
  }
}

@media (max-width: 768px) {

  .tabs {
    gap: 20px;
  }

  .tabs button {
    font-size: 12px;
  }

  .program {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-left: 0;
    width: 100%;
  }

  .pagination {
    margin: 0;
    align-self: center;
  }
}

@media (max-width: 425px) {
  .program {
    margin: 0;
  }
}
</style>