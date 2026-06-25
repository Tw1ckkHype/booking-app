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
  min-height: 100dvh; // dynamic viewport height для мобильных
  display: flex;
  flex-direction: column;
  background: #231F26;
  // убрали position: relative
}

.main-content {
  flex: 1;
  width: 100%;
  padding-bottom: 70px;
  
  @media (min-width: 769px) {
    padding-bottom: 0;
  }
}
</style>