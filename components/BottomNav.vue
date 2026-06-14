<template>
  <nav class="bottom-nav">
    <NuxtLink to="/home" class="nav-item" :class="{ active: route.path === '/home' }">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      <span>Главная</span>
    </NuxtLink>
    
    <NuxtLink to="/booking" class="nav-item" :class="{ active: route.path === '/booking' }">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <span>Бронирование</span>
    </NuxtLink>
    
    <NuxtLink to="/favorites" class="nav-item" :class="{ active: route.path === '/favorites' }">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      <span>Избранное</span>
    </NuxtLink>
    
    <NuxtLink to="/account" class="nav-item" :class="{ active: route.path === '/account' }">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      <span>Аккаунт</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: $surface;
  border-top: 1px solid $border;
  display: flex;
  justify-content: space-around;
  padding: $spacing-sm 0;
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: $text-secondary;
  text-decoration: none;
  font-size: 12px;
  padding: $spacing-xs $spacing-sm;
  transition: color 0.2s;
  
  &.active {
    color: $primary;
  }
  
  .icon {
    width: 24px;
    height: 24px;
  }
}
</style>