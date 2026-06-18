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
        <div v-for="item in resources" :key="item.id" class="resource-item">
          <div class="card-image"></div>
          <div class="card-info">
            <div class="info-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.location }}</p>
            </div>
            <div class="info-actions">
              <button class="favorite-btn" :class="{ active: item.isFavorite }">
                <svg viewBox="0 0 24 24" :fill="item.isFavorite ? 'white' : 'none'" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button class="more-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const resources = [
  { id: 1, title: 'Фотограф на мероприятие', location: 'г. Иркутск', isFavorite: true },
  { id: 2, title: 'Конференц-зал "Европа"', location: 'г. Иркутск, Улица Байкальская, 69', isFavorite: true },
  { id: 3, title: 'Маникюр в студии "BeMy"', location: 'г. Иркутск, Улица Дзержинского, 1', isFavorite: false },
  { id: 4, title: 'Автомобиль "Ford Mustang"', location: 'г. Иркутск', isFavorite: true }
]
</script>

<style scoped lang="scss">
.home-page {
  min-height: 100vh;
  background: #231F26;
  font-family: 'Montserrat', sans-serif;
}

.content {
  padding: 28px;
}

.tabs {
  display: flex;
  gap: 28px;
  margin-bottom: 42px;
  border-bottom: 1px solid #3A3A42;
}

.tab {
  background: none;
  color: #A0A0A0;
  font-size: 28px;
  padding: 14px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  
  &.active {
    color: #FFFFFF;
    border-bottom-color: #7C3AED;
  }
  
  &:hover {
    color: #FFFFFF;
  }
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.resource-item {
  display: flex;
  flex-direction: column;
}

.card-image {
  height: 438px;
  background: #36303A;
  border-radius: 21px;
  width: 100%;
}

.card-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 14px;
  gap: 14px;
}

.info-text {
  flex: 1;
  
  h3 {
    font-size: 21px;
    margin: 0 0 7px 0;
    color: white;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.3;
  }
  
  p {
    font-size: 18px;
    color: #A0A0A0;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
}

.info-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
}

.favorite-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
  
  svg {
    width: 28px;
    height: 28px;
    color: white;
  }
}

.more-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
  
  svg {
    width: 42px;
    height: 21px;
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .content {
    padding: 14px;
  }

  .tabs {
    gap: 21px;
    margin-bottom: 28px;
  }

  .tab {
    font-size: 21px;
    padding: 10px 0;
  }

  .resources-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .resource-item {
    width: 100%;
  }

  .card-image {
    height: 180px;
    border-radius: 14px;
  }

  .card-info {
    gap: 10px;
    margin-top: 10px;
  }

  .info-text {
    h3 {
      font-size: 14px;
      margin-bottom: 4px;
    }
    
    p {
      font-size: 12px;
    }
  }

  .info-actions {
    gap: 4px;
  }

  .favorite-btn svg,
  .more-btn svg {
    width: 21px;
    height: 21px;
  }
}
</style>