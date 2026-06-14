<template>
  <div class="change-photo-page">
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
    
    <!-- Модальное окно изменения фото -->
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <NuxtLink to="/profile-edit" class="back-btn-modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </NuxtLink>
          <h3>Изменить фотографию</h3>
        </div>
        
        <div class="modal-content">
          <button class="upload-btn">
            <span>Загрузить фото</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </button>
          
          <p class="preview-label">Предварительный просмотр</p>
          
          <div class="preview-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
          
          <button class="primary-btn save-btn" @click="handleSave">Сохранить изменения</button>
          <button class="cancel-btn" @click="handleCancel">Отменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleSave = () => {
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
.change-photo-page {
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
  gap: 20px;
}

.upload-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1A1A1F;
  padding: 16px 20px;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  width: 100%;
  border: none;
  cursor: pointer;
  
  svg {
    width: 24px;
    height: 24px;
  }
}

.preview-label {
  color: white;
  font-size: 18px;
}

.preview-avatar {
  width: 200px;
  height: 200px;
  border-radius: 24px;
  background: linear-gradient(135deg, #7C3AED 0%, #2D1B69 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  svg {
    width: 80px;
    height: 80px;
    color: white;
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