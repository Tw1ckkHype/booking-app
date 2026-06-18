<template>
  <div class="change-page">
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
      
      <button class="menu-item logout-btn">
        <span>Выйти из аккаунта</span>
      </button>
    </div>
    
    <!-- Модальное окно поверх -->
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <button class="modal-back-btn" @click="$router.back()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <h2 class="modal-title">Изменить фотографию</h2>
        </div>
        
        <div class="modal-content">
          <button class="upload-btn">
            <span>Загрузить фото</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </button>
          
          <p class="preview-label">Предварительный просмотр</p>
          
          <div class="photo-preview">
            <div class="avatar-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
          </div>
          
          <button class="save-btn">Сохранить изменения</button>
          <button class="cancel-btn" @click="$router.back()">Отменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.change-page {
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

/* Модальное окно */
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
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.modal-content {
  padding: 28px 35px;
  display: flex;
  flex-direction: column;
  gap: 21px;
}

.upload-btn {
  background: #19161B;
  border: none;
  border-radius: 14px;
  padding: 18px 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 21px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  
  &:hover {
    background: #231F26;
  }
  
  svg {
    width: 28px;
    height: 28px;
    color: #A0A0A0;
  }
}

.preview-label {
  color: white;
  font-size: 21px;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

.photo-preview {
  background: linear-gradient(180deg, #8307C1 0%, #2C1B4B 100%);
  border-radius: 28px;
  padding: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.avatar-circle {
  width: 120px;
  height: 120px;
  background: #19161B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 50px;
    height: 50px;
    color: white;
  }
}

.save-btn {
  background: linear-gradient(135deg, #A731E2 0%, #4A0882 100%);
  color: white;
  border: none;
  border-radius: 14px;
  padding: 18px 28px;
  font-size: 21px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
}

.cancel-btn {
  background: #19161B;
  color: #E90000;
  border: none;
  border-radius: 14px;
  padding: 18px 28px;
  font-size: 21px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
}

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
    gap: 18px;
  }

  .upload-btn {
    padding: 14px 18px;
    font-size: 18px;
    border-radius: 10px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }

  .preview-label {
    font-size: 18px;
  }

  .photo-preview {
    padding: 28px;
    min-height: 160px;
    border-radius: 21px;
  }

  .avatar-circle {
    width: 90px;
    height: 90px;
    
    svg {
      width: 38px;
      height: 38px;
    }
  }

  .save-btn,
  .cancel-btn {
    padding: 14px 21px;
    font-size: 18px;
    border-radius: 10px;
  }
}

</style>