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
  const hideOnPages = ['index', 'login']
  return !hideOnPages.includes(route.name as string)
})
</script>

<style scoped lang="scss">
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1A1A1F;
}

.main-content {
  flex: 1;
  width: 100%;
  padding-bottom: 80px;
}

@media (min-width: 768px) {
  .main-content {
    padding-bottom: 0;
    padding: 40px 80px;
  }
}
</style>