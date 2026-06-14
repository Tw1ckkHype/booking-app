<template>
  <div class="account-page">
    <div class="profile-header">
      <NuxtLink to="/home" class="back-btn">
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
      <NuxtLink to="/favorites" class="menu-item">
        <span>Избранное</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </NuxtLink>
      
      <NuxtLink to="/my-calendar" class="menu-item">
        <span>Мой календарь</span>
        <div class="badge">28</div>
      </NuxtLink>
      
      <NuxtLink to="/settings" class="menu-item">
        <span>Настройки</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.account-page {
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
  
  &:hover {
    background: #2D2D35;
  }
  
  svg {
    width: 28px;
    height: 28px;
    color: #A0A0A0;
  }
}

.badge {
  background: #7C3AED;
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
}
</style>