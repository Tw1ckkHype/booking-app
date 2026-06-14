<template>
  <div class="notifications-page">
    <div class="profile-header">
      <NuxtLink to="/settings" class="back-btn">
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
    
    <!-- Модальное окно уведомлений -->
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <NuxtLink to="/settings" class="back-btn-modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </NuxtLink>
          <h3>Уведомления</h3>
        </div>
        
        <div class="modal-content">
          <div class="toggle-item">
            <span>Электронная почта</span>
            <label class="switch">
              <input type="checkbox" v-model="emailNotif" />
              <span class="slider"></span>
            </label>
          </div>
          
          <div class="toggle-item">
            <span>Пуш-уведомления</span>
            <label class="switch">
              <input type="checkbox" v-model="pushNotif" />
              <span class="slider"></span>
            </label>
          </div>
          
          <div class="toggle-item">
            <span>СМС</span>
            <label class="switch">
              <input type="checkbox" v-model="smsNotif" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emailNotif = ref(false)
const pushNotif = ref(true)
const smsNotif = ref(true)

const handleLogout = () => {
  navigateTo('/login')
}
</script>

<style scoped lang="scss">
.notifications-page {
  min-height: 100vh;
  background: #1A1A1F;
  position: relative;
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

/* Модальное окно */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: #25252B;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid #3A3A42;
  
  h3 {
    font-size: 22px;
    color: white;
  }
}

.back-btn-modal {
  color: white;
  
  svg {
    width: 28px;
    height: 28px;
  }
}

.modal-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.toggle-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: white;
}

.switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #3A3A42;
    transition: .3s;
    border-radius: 32px;
    
    &:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .3s;
      border-radius: 50%;
    }
  }
  
  input:checked + .slider {
    background-color: #7C3AED;
  }
  
  input:checked + .slider:before {
    transform: translateX(24px);
  }
}
</style>