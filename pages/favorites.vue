<template>
  <div class="favorites-page">
    <Header />
    
    <div class="content">
      <h2 class="page-title">
        <svg class="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Избранное
      </h2>
      
      <div class="resources-grid">
        <div v-for="item in favorites" :key="item.id" class="resource-card">
          <div class="card-image"></div>
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.location }}</p>
          </div>
          <button class="favorite-btn active">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const favorites = [
  { id: 1, title: 'Фотограф на мероприятие', location: 'г. Иркутск' },
  { id: 2, title: 'Конференц-зал "Европа"', location: 'г. Иркутск, Улица Байкальская, 69' },
  { id: 3, title: 'Автомобиль "Ford Mustang"', location: 'г. Иркутск' }
]
</script>

<style scoped lang="scss">
.favorites-page {
  min-height: 100vh;
  background: #1A1A1F;
}

.content {
  padding: 16px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 24px;
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-icon {
  width: 24px;
  height: 24px;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (min-width: 768px) {
  .resources-grid {
    grid-template-columns: repeat(3, 1fr);
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