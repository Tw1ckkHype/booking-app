<template>
  <div class="settings-page">
    <div class="profile-header">
      <NuxtLink to="/account" class="back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </NuxtLink>
      
      <div class="avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
      
      <h2 class="user-name">Иван Иванович</h2>
    </div>
    
    <div class="menu-list">
      <NuxtLink to="/notifications" class="menu-item">
        <span>Уведомления</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </NuxtLink>
      
      <NuxtLink to="/profile-edit" class="menu-item">
        <span>Редактировать профиль</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </NuxtLink>
      
      <button class="menu-item logout-btn" @click="handleLogout">
        <span>Выйти из аккаунта</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleLogout = () => {
  navigateTo('/login')
}
</script>

<style scoped lang="scss">
.settings-page {
  min-height: 100vh;
  background: #1A1A1F;
}

.profile-header {
  background: linear-gradient(180deg, #7C3AED 0%, #2D1B69 100%);
  padding: 60px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.back-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  
  svg {
    width: 32px;
    height: 32px;
  }
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #25252B;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  
  svg {
    width: 50px;
    height: 50px;
    color: #A0A0A0;
  }
}

.user-name {
  font-size: 24px;
  font-weight: 600;
  color: white;
}

.menu-list {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #25252B;
  padding: 20px 24px;
  border-radius: 16px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  transition: background 0.2s;
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: #2D2D35;
  }
  
  svg {
    width: 28px;
    height: 28px;
    color: #A0A0A0;
  }
}

.logout-btn {
  color: #EF4444;
  
  span {
    color: #EF4444;
  }
}
</style>