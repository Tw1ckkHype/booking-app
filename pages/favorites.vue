<template>
  <div class="favorites-page">
    <Header />
    
    <div class="content">
      <div class="page-header">
        <button class="back-btn" @click="$router.back()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h2 class="page-title">Избранное</h2>
      </div>
      
      <div class="resources-grid">
        <div v-for="item in favorites" :key="item.id" class="resource-item">
          <div class="card-image"></div>
          <div class="card-info">
            <div class="info-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.location }}</p>
            </div>
            <div class="info-actions">
              <button class="favorite-btn active">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
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
const favorites = [
  { id: 1, title: 'Фотограф на мероприятие', location: 'г. Иркутск' },
  { id: 2, title: 'Конференц-зал "Европа"', location: 'г. Иркутск, Улица Байкальская, 69' },
  { id: 3, title: 'Автомобиль "Ford Mustang"', location: 'г. Иркутск' }
]
</script>

<style scoped lang="scss">
.favorites-page {
  min-height: 100vh;
  background: #231F26;
  font-family: 'Montserrat', sans-serif;
}

.content {
  padding: 28px;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 21px;
  margin-bottom: 42px;
}

.back-btn {
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
    transform: translateX(-4px);
  }
  
  svg {
    width: 35px;
    height: 35px;
  }
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  color: white;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 280px);
  gap: 28px;
  justify-content: start;
}

.resource-item {
  display: flex;
  flex-direction: column;
  width: 280px;
}

.card-image {
  height: 350px;
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
  
  &.active svg {
    color: white;
    fill: white;
  }
  
  &:hover {
    transform: scale(1.1);
  }
  
  svg {
    width: 28px;
    height: 28px;
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
    height: 30px;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 14px;
  }

  .page-header {
    margin-bottom: 28px;
  }

  .back-btn svg {
    width: 28px;
    height: 28px;
  }

  .page-title {
    font-size: 28px;
    margin-bottom: 0;
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