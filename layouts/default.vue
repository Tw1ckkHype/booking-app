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
  const hideOnPages = ['/', '/login']
  return !hideOnPages.includes(route.path)
})
</script>

<style scoped lang="scss">
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #231F26;
}

.main-content {
  flex: 1;
  width: 100%;
}

@media (max-width: 768px) {
  .main-content {
    padding-bottom: 70px; // только на мобильных
  }
}
</style>