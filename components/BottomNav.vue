<template>
  <nav class="bottom-nav">
    <NuxtLink to="/search" class="nav-item" :class="{ active: isActive('/search') }">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </NuxtLink>
    
    <NuxtLink to="/home" class="nav-item" :class="{ active: isActive('/home') }">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    </NuxtLink>
    
    <NuxtLink to="/account" class="nav-item" :class="{ active: isActive('/account') }">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}
</script>

<style scoped lang="scss">
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #231F26;
  border-top: 1px solid #3A3A42;
  display: none;
  justify-content: space-around;
  padding: 18px 0;
  z-index: 100;
  height: 70px; // фиксированная высота
  
  @media (max-width: 768px) {
    display: flex;
  }
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A0A0A0;
  text-decoration: none;
  transition: all 0.2s;
  flex: 1;
  
  svg {
    width: 28px;
    height: 28px;
  }
  
  &.active {
    color: white;
  }
  
  &:hover {
    color: white;
  }
}
</style>