<template>
  <div class="notifications-page">
    <!-- Верхний градиентный блок (как в settings) -->
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
    
    <!-- Меню настроек (как в settings) -->
    <div class="menu">
      <div class="menu-item">
        <span>Уведомления</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
      
      <NuxtLink to="/profile-edit" class="menu-item">
        <span>Редактировать профиль</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </NuxtLink>
      
      <button class="menu-item logout-btn">
        <span>Выйти из аккаунта</span>
      </button>
    </div>
    
    <!-- Модальное окно уведомлений поверх -->
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <button class="modal-back-btn" @click="$router.back()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <h2 class="modal-title">Уведомления</h2>
        </div>
        
        <div class="modal-content">
          <div class="notification-item">
            <span>Электронная почта</span>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.email" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          
          <div class="notification-item">
            <span>Пуш-уведомления</span>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.push" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          
          <div class="notification-item">
            <span>СМС</span>
            <label class="toggle">
              <input type="checkbox" v-model="notifications.sms" />
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const notifications = ref({
  email: false,
  push: true,
  sms: true
})
</script>

<style scoped lang="scss">
.notifications-page {
  min-height: 100vh;
  background: #231F26;
  font-family: 'Montserrat', sans-serif;
  position: relative;
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
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  
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

.logout-btn {
  span {
    color: #E90000;
  }
  
  &:hover {
    background: #231F26;
  }
}

/* Модальное окно поверх */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: #231F26;
  border-radius: 28px;
  width: 90%;
  max-width: 560px;
  overflow: hidden;
  border: 1px solid #3A3A42;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 21px;
  padding: 28px 35px;
  border-bottom: 1px solid #3A3A42;
}

.modal-back-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  svg {
    width: 35px;
    height: 35px;
  }
}

.modal-title {
  color: white;
  font-size: 35px;
  font-weight: 700;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.modal-content {
  padding: 28px 35px;
}

.notification-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 0;
  border-bottom: 1px solid #3A3A42;
  
  &:last-child {
    border-bottom: none;
  }
  
  span {
    color: white;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
  }
}

.toggle {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 35px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #463F4B;
    transition: 0.3s;
    border-radius: 35px;
    
    &:before {
      position: absolute;
      content: "";
      height: 28px;
      width: 28px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
    }
  }
  
  input:checked + .toggle-slider {
    background-color: #8307C1;
  }
  
  input:checked + .toggle-slider:before {
    transform: translateX(35px);
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .profile-header {
    padding: 28px 14px 42px;
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

  /* Модалка на всю ширину */
  .modal {
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    border: none;
    min-height: 100vh;
  }

  .modal-header {
    padding: 21px 14px;
    gap: 14px;
  }

  .modal-back-btn svg {
    width: 28px;
    height: 28px;
  }

  .modal-title {
    font-size: 21px;
  }

  .modal-content {
    padding: 21px 14px;
  }

  .notification-item {
    padding: 18px 0;
    
    span {
      font-size: 18px;
    }
  }

  .toggle {
    width: 56px;
    height: 28px;
    
    .toggle-slider:before {
      height: 22px;
      width: 22px;
      left: 3px;
      bottom: 3px;
    }
    
    input:checked + .toggle-slider:before {
      transform: translateX(28px);
    }
  }
}

</style>