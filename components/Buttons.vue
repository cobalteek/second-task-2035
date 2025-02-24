<script setup lang="ts">

const props = defineProps<{
  activeTab: { type: string, default: "all" }
}>();

const emit = defineEmits(['update:activeTab']);

// Локальная реактивная переменная для отслеживания activeTab
const selectedTab = ref(props.activeTab);

// Следим за изменением пропса, чтобы обновлять локальное состояние
watch(() => props.activeTab, (newValue) => {
  selectedTab.value = newValue;
});

// Функция для обновления activeTab через emit
const changeTab = (tab: string) => {
  selectedTab.value = tab;

  emit('update:activeTab', tab);
};


</script>

<template>
  <div class="tabs">
    <button
        :class="{ active: activeTab === 'all' }"
        @click="changeTab( 'all')"
    >
      ВСЕ ПРОГРАММЫ
    </button>
    <button
        :class="{ active: activeTab === 'my' }"
        @click="changeTab( 'my')"
    >
      МОИ ПРОГРАММЫ
    </button>
  </div>
</template>

<style scoped>
.tabs {
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  margin-top: 46px;
}

button {
  border: 0;
  background-color: #FFFFFF;
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

button.active {
  font-weight: 600;
}
</style>
