<template>
  <div class="change-password-page">
    <div class="profile-header">
      <NuxtLink to="/profile-edit" class="back-btn">
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
    
    <!-- Модальное окно изменения пароля -->
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <NuxtLink to="/profile-edit" class="back-btn-modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </NuxtLink>
          <h3>Изменить пароль</h3>
        </div>
        
        <div class="modal-content">
          <div class="form-group">
            <label>Старый пароль</label>
            <input v-model="oldPassword" type="password" class="input" />
          </div>
          
          <div class="form-group">
            <label>Новый пароль</label>
            <input v-model="newPassword" type="password" class="input" />
          </div>
          
          <div class="form-group">
            <label>Новый пароль еще раз</label>
            <input v-model="confirmPassword" type="password" class="input" />
          </div>
          
          <button class="primary-btn save-btn" @click="handleSave">Сохранить изменения</button>
          <button class="cancel-btn" @click="handleCancel">Отменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const handleSave = () => {
  if (newPassword.value !== confirmPassword.value) {
    alert('Пароли не совпадают!')
    return
  }
  navigateTo('/settings')
}

const handleCancel = () => {
  navigateTo('/profile-edit')
}

const handleLogout = () => {
  navigateTo('/login')
}
</script>

<style scoped lang="scss">
.change-password-page {
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
  
  svg {
    width: 50px;
    height: 50px;
    color: #A0A0A0;
  }
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
  width: 100%;
  text-align: left;
  
  svg {
    width: 28px;
    height: 28px;
    color: #A0A0A0;
  }
}

.logout-btn {
  color: #EF4444;
  border: none;
  cursor: pointer;
  
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
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-size: 16px;
    color: white;
  }
}

.input {
  background: #2D2D35;
  border: 1px solid #3A3A42;
  border-radius: 12px;
  padding: 14px 16px;
  color: white;
  font-size: 18px;
  outline: none;
  
  &:focus {
    border-color: #7C3AED;
  }
}

.save-btn {
  width: 100%;
  padding: 16px;
  background: #7C3AED;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.cancel-btn {
  width: 100%;
  padding: 16px;
  font-size: 18px;
  color: #EF4444;
  background: #2D2D35;
  border-radius: 12px;
  border: none;
  cursor: pointer;
}
</style>