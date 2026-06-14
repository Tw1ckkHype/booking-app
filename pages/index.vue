<template>
  <div class="splash-screen">
    <div class="content">
      <h1 class="title">Бронирование</h1>
      <p class="subtitle">общих ресурсов</p>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  setTimeout(() => {
    navigateTo('/login')
  }, 2000)
})
</script>

<style scoped lang="scss">
@import '../assets/scss/variables.scss';

.splash-screen {
  min-height: 100vh;
  background: $purple-bg;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
}

.title {
  font-size: 40px;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: $spacing-sm;
}

.subtitle {
  font-size: 20px;
  color: $text-secondary;
  font-weight: 400;
}
</style>