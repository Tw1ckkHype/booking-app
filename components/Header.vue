<template>
  <header class="header">
    <div class="header-top">
      <!-- Кнопка категорий -->
      <button class="menu-btn" @click="toggleCategories">
        <svg v-if="!showCategories" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span>Все категории</span>
      </button>
      
      <div class="search-bar">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" placeholder="Поиск" class="search-input" />
        <button class="filter-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </button>
      </div>
      
      <div class="header-actions">
        <NuxtLink to="/booking" class="notification-badge">
          28
        </NuxtLink>
        <NuxtLink to="/account" class="profile-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </NuxtLink>
      </div>
    </div>
    
    <!-- Список категорий (появляется при клике) -->
    <div v-if="showCategories" class="categories-panel">
      <div class="categories-list">
        <div class="category-item" v-for="cat in categories" :key="cat">
          {{ cat }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const showCategories = ref(false)

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

const toggleCategories = () => {
  showCategories.value = !showCategories.value
}
</script>

<style scoped lang="scss">
.header {
  background: #231F26;
  padding: 28px;
  border-bottom: 1px solid #3A3A42;
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: 'Montserrat', sans-serif;
}

.header-top {
  display: flex;
  gap: 14px;
  align-items: center;
}

.menu-btn {
  background: linear-gradient(135deg, #A731E2 0%, #490782 100%);
  color: white;
  padding: 21px 28px;
  border-radius: 21px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 25px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  
  svg {
    width: 32px;
    height: 32px;
  }
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  background: #36303A;
  border-radius: 21px;
  padding: 21px 28px;
  gap: 21px;
}

.search-icon {
  width: 32px;
  height: 32px;
  color: #A0A0A0;
}

.search-input {
  flex: 1;
  background: transparent;
  color: white;
  font-size: 25px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  
  &::placeholder {
    color: #A0A0A0;
  }
}

.filter-btn {
  color: #A0A0A0;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: white;
  }
  
  svg {
    width: 32px;
    height: 32px;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.notification-badge {
  background: linear-gradient(135deg, #A731E2 0%, #490782 100%);
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
}

.profile-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #A731E2 0%, #490782 100%);
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
  
  svg {
    width: 35px;
    height: 35px;
  }
}

/* Стили для панели категорий */
.categories-panel {
  margin-top: 28px;
  background: #231F26;
  border-radius: 28px;
  padding: 28px;
  border: 1px solid #3A3A42;
}

.categories-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 21px;
}

@media (min-width: 768px) {
  .categories-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.category-item {
  background: #19161B;
  padding: 28px;
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
    color: #A0A0A0;
  }
  
  &:hover {
    background: #4A4250;
    transform: translateY(-2px);
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .header {
    padding: 14px;
  }

  .header-top {
    gap: 10px;
  }

  // Скрываем кнопку "Все категории" на мобильных
  .menu-btn {
    display: none;
  }

  // Скрываем иконку профиля на мобильных (она есть в BottomNav)
  .profile-icon {
    display: none;
  }

  .search-bar {
    padding: 12px 16px;
    border-radius: 14px;
    gap: 12px;
  }

  .search-icon {
    width: 20px;
    height: 20px;
  }

  .search-input {
    font-size: 16px;
  }

  .filter-btn svg {
    width: 20px;
    height: 20px;
  }

  .notification-badge {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    font-size: 18px;
  }

  .categories-panel {
    margin-top: 14px;
    padding: 14px;
    border-radius: 14px;
  }

  .categories-list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .category-item {
    padding: 14px;
    border-radius: 12px;
    font-size: 16px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>