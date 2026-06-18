<template>
  <div class="search-page">
    <Header />
    
    <div class="content">
      <div class="categories-list">
        <div class="category-item" v-for="cat in categories" :key="cat">
          <span>{{ cat }}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  'Услуги красоты',
  'Фотографы',
  'Конференц-залы',
  'Оборудование',
  'Транспорт',
  'Персонал',
  'Специальные ресурсы',
  'Отели и проживание'
]
</script>

<style scoped lang="scss">
.search-page {
  min-height: 100vh;
  background: #231F26;
  font-family: 'Montserrat', sans-serif;
}

.content {
  padding: 28px;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 900px;
  margin: 0 auto;
}

.category-item {
  background: #19161B;
  padding: 21px 28px;
  border-radius: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  
  svg {
    width: 35px;
    height: 35px;
    color: white;
  }
  
  &:hover {
    background: #231F26;
    transform: translateY(-2px);
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .content {
    padding: 14px;
  }

  .categories-list {
    gap: 10px;
  }

  .category-item {
    padding: 18px 21px;
    border-radius: 14px;
    font-size: 18px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>