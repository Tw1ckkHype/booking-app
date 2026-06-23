<template>
  <div class="account-page">
    <div class="profile-header">
      <button class="back-btn" @click="$router.back()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <div class="avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
      
      <h1 class="user-name">Иван Иванович</h1>
    </div>
    
    <div class="menu">
      <NuxtLink to="/favorites" class="menu-item">
        <span>Избранное</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </NuxtLink>
      
      <NuxtLink to="/my-calendar" class="menu-item">
  <span>Мой календарь</span>
  <div class="calendar-icon">
    <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="3" width="40" height="40" rx="5" fill="white"/>
      <path d="M6.6 31V28.936C7.048 28.088 7.592 27.328 8.232 26.656C8.872 25.984 9.584 25.296 10.368 24.592C11.024 24 11.552 23.512 11.952 23.128C12.368 22.744 12.672 22.384 12.864 22.048C13.072 21.696 13.176 21.296 13.176 20.848C13.176 19.712 12.432 19.144 10.944 19.144C10.256 19.144 9.584 19.224 8.928 19.384C8.288 19.544 7.68 19.744 7.104 19.984V16.144C7.76 15.888 8.528 15.688 9.408 15.544C10.288 15.384 11.176 15.304 12.072 15.304C13.992 15.304 15.424 15.76 16.368 16.672C17.312 17.568 17.784 18.776 17.784 20.296C17.784 21.016 17.696 21.64 17.52 22.168C17.36 22.68 17.104 23.152 16.752 23.584C16.4 24.016 15.944 24.48 15.384 24.976C14.888 25.408 14.4 25.84 13.92 26.272C13.44 26.704 13.056 27.128 12.768 27.544H17.928V31H6.6ZM25.8351 31.24C23.5311 31.24 21.8351 30.84 20.7471 30.04C19.6751 29.24 19.1391 28.064 19.1391 26.512C19.1391 25.76 19.3151 25.064 19.6671 24.424C20.0351 23.784 20.5311 23.312 21.1551 23.008C20.6111 22.672 20.2031 22.24 19.9311 21.712C19.6591 21.184 19.5231 20.624 19.5231 20.032C19.5231 18.592 20.0191 17.448 21.0111 16.6C22.0031 15.736 23.6111 15.304 25.8351 15.304C27.3711 15.304 28.6031 15.496 29.5311 15.88C30.4591 16.264 31.1311 16.816 31.5471 17.536C31.9791 18.24 32.1951 19.072 32.1951 20.032C32.1951 20.624 32.0591 21.2 31.7871 21.76C31.5151 22.32 31.0911 22.776 30.5151 23.128C31.8911 23.816 32.5791 24.944 32.5791 26.512C32.5791 28.064 32.0351 29.24 30.9471 30.04C29.8591 30.84 28.1551 31.24 25.8351 31.24ZM26.4351 21.88C26.9471 21.704 27.3151 21.488 27.5391 21.232C27.7791 20.976 27.8991 20.608 27.8991 20.128C27.8991 19.088 27.2111 18.568 25.8351 18.568C24.4751 18.568 23.7951 19.088 23.7951 20.128C23.7951 20.944 24.2271 21.44 25.0911 21.616L26.4351 21.88ZM25.8351 28C26.6831 28 27.2991 27.872 27.6831 27.616C28.0831 27.344 28.2831 26.944 28.2831 26.416C28.2831 25.952 28.1551 25.6 27.8991 25.36C27.6431 25.12 27.2191 24.936 26.6271 24.808L24.9951 24.472C24.5151 24.584 24.1311 24.776 23.8431 25.048C23.5551 25.32 23.4111 25.728 23.4111 26.272C23.4111 27.424 24.2191 28 25.8351 28Z" fill="#19161B"/>
      <circle cx="12" cy="4" r="4" fill="#19161B"/>
      <circle cx="28" cy="4" r="4" fill="#19161B"/>
    </svg>
  </div>
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

<script setup lang="ts">
</script>

<style scoped lang="scss">
.account-page {
  min-height: 100vh;
  background: #231F26;
  font-family: 'Montserrat', sans-serif;
}

.profile-header {
  background: linear-gradient(180deg, #8307C1 0%, #2C1B4B 100%);
  padding: 42px 28px 70px;
  text-align: center;
  position: relative;
  border-radius: 0 0 42px 42px;
}

.back-btn {
  position: absolute;
  top: 28px;
  left: 28px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  
  svg {
    width: 40px;
    height: 40px;
  }
}

.avatar {
  width: 180px;
  height: 180px;
  background: #19161B;
  border-radius: 50%;
  margin: 0 auto 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 70px;
    height: 70px;
    color: white;
  }
}

.user-name {
  color: white;
  font-size: 42px;
  font-weight: 600;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.menu {
  padding: 42px 28px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  max-width: 900px;
  margin: 0 auto;
}

.menu-item {
  background: #19161B;
  padding: 21px 35px;
  border-radius: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 35px;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  
  &:hover {
    background: #231F26;
    transform: translateY(-2px);
  }
  
  svg {
    width: 42px;
    height: 42px;
    color: white;
  }
}

.calendar-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 42px;
    height: 44px;
  }
}

@media (max-width: 768px) {
  .profile-header {
    padding: 150px 14px 42px;
    border-radius: 0 0 28px 28px;
  }

  .back-btn {
    top: 14px;
    left: 14px;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }

  .avatar {
    width: 120px;
    height: 120px;
    margin-bottom: 14px;
    
    svg {
      width: 50px;
      height: 50px;
    }
  }

  .user-name {
    font-size: 28px;
  }

  .menu {
    padding: 28px 14px;
    gap: 14px;
  }

  .menu-item {
    padding: 14px 21px;
    border-radius: 14px;
    font-size: 21px;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }

  .calendar-icon {
    width: 42px;
    height: 42px;
    
    svg {
      width: 28px;
      height: 30px;
    }
    
    .calendar-number {
      font-size: 11px;
      bottom: 6px;
    }
  }
}

</style>