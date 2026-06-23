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
        <button class="filter-btn" @click="toggleSearch">
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
  <svg width="75" height="80" viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="5" width="75" height="75" rx="15" fill="url(#paint0_linear_157_318)"/>
    <path d="M15.2075 57.8136V54.8886C16.0175 53.1486 17.0825 51.5886 18.4025 50.2086C19.7225 48.7986 21.1625 47.4036 22.7225 46.0236C23.8925 44.9736 24.8525 44.1036 25.6025 43.4136C26.3525 42.7236 26.9375 42.1086 27.3575 41.5686C27.7775 41.0286 28.0775 40.4736 28.2575 39.9036C28.4375 39.3336 28.5275 38.6286 28.5275 37.7886C28.5275 34.9986 26.7575 33.6036 23.2175 33.6036C22.0175 33.6036 20.8175 33.7386 19.6175 34.0086C18.4475 34.2486 17.3225 34.5786 16.2425 34.9986V29.6436C17.3825 29.2536 18.7025 28.9536 20.2025 28.7436C21.7325 28.5036 23.1875 28.3836 24.5675 28.3836C27.9275 28.3836 30.4475 29.2236 32.1275 30.9036C33.8375 32.5536 34.6925 34.8036 34.6925 37.6536C34.6925 39.6336 34.1975 41.3286 33.2075 42.7386C32.2475 44.1186 30.9875 45.4836 29.4275 46.8336C28.1975 47.9136 27.0275 48.9636 25.9175 49.9836C24.8075 50.9736 23.8775 52.0236 23.1275 53.1336H34.9625V57.8136H15.2075ZM50.0238 58.2636C42.1938 58.2636 38.2788 55.4286 38.2788 49.7586C38.2788 48.1986 38.6838 46.7886 39.4938 45.5286C40.3338 44.2686 41.4888 43.3686 42.9588 42.8286C41.6088 42.2286 40.6188 41.3886 39.9888 40.3086C39.3588 39.2286 39.0438 38.0736 39.0438 36.8436C39.0438 34.2636 39.9288 32.2086 41.6988 30.6786C43.4688 29.1486 46.2438 28.3836 50.0238 28.3836C53.8938 28.3836 56.6838 29.1486 58.3938 30.6786C60.1338 32.2086 61.0038 34.2636 61.0038 36.8436C61.0038 38.1336 60.6888 39.3486 60.0588 40.4886C59.4588 41.6286 58.4238 42.5136 56.9538 43.1436C60.1638 44.2836 61.7688 46.4886 61.7688 49.7586C61.7688 55.4286 57.8538 58.2636 50.0238 58.2636ZM51.1938 41.2986C52.6038 40.9086 53.6238 40.4136 54.2538 39.8136C54.9138 39.1836 55.2438 38.2386 55.2438 36.9786C55.2438 35.6286 54.8088 34.6536 53.9388 34.0536C53.0988 33.4536 51.7938 33.1536 50.0238 33.1536C48.2838 33.1536 46.9788 33.4536 46.1088 34.0536C45.2388 34.6236 44.8038 35.5986 44.8038 36.9786C44.8038 39.0186 45.9438 40.2636 48.2238 40.7136L51.1938 41.2986ZM50.0238 53.5386C52.0638 53.5386 53.5638 53.2386 54.5238 52.6386C55.5138 52.0386 56.0088 51.0486 56.0088 49.6686C56.0088 48.4386 55.6788 47.5536 55.0188 47.0136C54.3588 46.4436 53.2788 46.0086 51.7788 45.7086L48.3138 44.9886C47.0238 45.2886 45.9888 45.7686 45.2088 46.4286C44.4288 47.0586 44.0388 48.0786 44.0388 49.4886C44.0388 50.9586 44.5338 52.0086 45.5238 52.6386C46.5138 53.2386 48.0138 53.5386 50.0238 53.5386Z" fill="white"/>
    <ellipse cx="22.6875" cy="6.80462" rx="7.40625" ry="6.80462" fill="#231F26"/>
    <ellipse cx="52.3125" cy="6.80462" rx="7.40625" ry="6.80462" fill="#231F26"/>
    <defs>
      <linearGradient id="paint0_linear_157_318" x1="7.03125" y1="12.0312" x2="70.3125" y2="80" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8307C1"/>
        <stop offset="0.480808" stop-color="#570490"/>
        <stop offset="1" stop-color="#270158"/>
      </linearGradient>
    </defs>
  </svg>
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
const route = useRoute()
const router = useRouter()
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

const toggleSearch = () => {
  if (route.path === '/search') {
    router.push('/home')
  } else {
    router.push('/search')
  }
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
  background: none;
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
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
  padding: 28px 28px 28px 42px;
  border: 1px solid #3A3A42;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 20px;
    bottom: 20px;
    width: 8px;
    background: #19161B;
    border-radius: 4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 14px;
    top: 20px;
    width: 8px;
    height: 60px;
    background: linear-gradient(180deg, #A731E2 0%, #490782 100%);
    border-radius: 4px;
  }
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
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .header-top {
    gap: 10px;
    width: 100%;
  }

  .menu-btn {
    display: none;
  }

  .profile-icon {
    display: none;
  }

  .search-bar {
    flex: 1;
    min-width: 0;
    padding: 12px 16px;
    border-radius: 14px;
    gap: 12px;
  }

  .search-input {
    min-width: 0;
    font-size: 16px;
  }

  .search-icon {
    width: 20px;
    height: 20px;
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
    flex-shrink: 0;
  }

  .categories-panel {
    margin-top: 14px;
    padding: 14px;
    border-radius: 14px;
    
    &::before,
    &::after {
      display: none;
    }
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
      width: 28px;
      height: 30px;
    }
  }
}
</style>