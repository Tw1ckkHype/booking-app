<template>
  <div class="home-page">
    <Header />
    
    <div class="content">
      <div class="tabs">
        <button class="tab active">Рекомендации</button>
        <button class="tab">Акции</button>
        <button class="tab">Новое</button>
      </div>
      
      <div class="resources-grid">
        <div v-for="item in resources" :key="item.id" class="resource-card">
          <div class="card-image"></div>
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.location }}</p>
          </div>
          <button class="favorite-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const resources = [
  { id: 1, title: 'Фотограф на мероприятие', location: 'г. Иркутск' },
  { id: 2, title: 'Конференц-зал "Европа"', location: 'г. Иркутск, Улица Байкальская, 69' },
  { id: 3, title: 'Маникюр в студии "BeMy"', location: 'г. Иркутск, Улица Дзержинского, 1' },
  { id: 4, title: 'Автомобиль "Ford Mustang"', location: 'г. Иркутск' }
]
</script>

<style scoped lang="scss">
.home-page {
  min-height: 100vh;
  background: #1A1A1F;
}

.content {
  padding: 16px;
}

.tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #3A3A42;
}

.tab {
  background: none;
  color: #A0A0A0;
  font-size: 16px;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  
  &.active {
    color: #FFFFFF;
    border-bottom-color: #7C3AED;
  }
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (min-width: 768px) {
  .resources-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.resource-card {
  background: #25252B;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.card-image {
  height: 150px;
  background: #2D2D35;
}

@media (min-width: 768px) {
  .card-image {
    height: 250px;
  }
}

.card-content {
  padding: 12px;
}

.card-content h3 {
  font-size: 14px;
  margin-bottom: 4px;
  color: white;
}

.card-content p {
  font-size: 12px;
  color: #A0A0A0;
}

.favorite-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #25252B;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  svg {
    width: 18px;
    height: 18px;
    color: white;
  }
}
</style>