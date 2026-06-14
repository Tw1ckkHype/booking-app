<template>
  <div class="search-page">
    <Header />
    
    <div class="content">
      <div class="categories-list">
        <NuxtLink v-for="cat in categories" :key="cat.id" :to="`/booking?category=${cat.id}`" class="category-item">
          <span>{{ cat.name }}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  { id: 1, name: 'Услуги красоты' },
  { id: 2, name: 'Фотографы' },
  { id: 3, name: 'Конференц-залы' },
  { id: 4, name: 'Оборудование' },
  { id: 5, name: 'Транспорт' },
  { id: 6, name: 'Персонал' },
  { id: 7, name: 'Специальные ресурсы' },
  { id: 8, name: 'Отели и проживание' }
]
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.search-page {
  min-height: 100vh;
  background: $background;
}

.content {
  padding: $spacing-md;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $surface;
  padding: $spacing-md;
  border-radius: $radius-md;
  color: $text-primary;
  text-decoration: none;
  transition: background 0.2s;
  
  &:hover {
    background: $surface-light;
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: $text-secondary;
  }
}

@media (min-width: 768px) {
  .search-page {
    max-width: 414px;
    margin: 0 auto;
    border-left: 1px solid #3A3A42;
    border-right: 1px solid #3A3A42;
  }
}
</style>