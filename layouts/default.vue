<template>
  <div class="app-layout">
    <main class="main-content">
      <slot />
    </main>
    <BottomNav v-if="showBottomNav" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const showBottomNav = computed(() => {
  // Проверяем по path вместо name
  const hideOnPages = ['/', '/login']
  return !hideOnPages.includes(route.path)
})
</script>

<style scoped lang="scss">
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #231F26; // было #1A1A1F
}

.main-content {
  flex: 1;
  width: 100%;
  padding-bottom: 80px; // место для BottomNav на мобильных
}

@media (min-width: 768px) {
  .main-content {
    padding-bottom: 0; // на десктопе BottomNav скрыт
  }
}
</style>