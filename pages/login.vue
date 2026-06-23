<template>
  <div class="login-page">
    <div class="content">
      <h1 class="title">Авторизация</h1>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <div class="input-wrapper">
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input v-model="email" type="email" placeholder="Email" required class="input" />
          </div>
        </div>
        
        <div class="input-group">
          <div class="input-wrapper">
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input 
              v-model="password" 
              type="password" 
              placeholder="Password" 
              required 
              class="input"
              @keyup.enter="handleLogin"
            />
          </div>
        </div>
        
        <div class="forgot-password">
          <a href="#">Забыли пароль?</a>
        </div>
      </form>
      
      <div class="divider">
        <span>Войти с помощью</span>
      </div>
      
      <div class="social-buttons">
        <button class="social-btn">
          <svg viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </button>
        <button class="social-btn">
          <svg viewBox="0 0 24 24" fill="white"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        </button>
        <button class="social-btn">
          <svg viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
        </button>
      </div>
      
      <p class="register-link">
        <a href="#">У вас нет аккаунта? Регистрация</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

const handleLogin = () => {
  navigateTo('/home')
}
</script>

<style scoped lang="scss">
.login-page {
  min-height: 100vh;
  background: #231F26;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Montserrat', sans-serif;
}

.content {
  width: 100%;
  max-width: 660px;
}

.title {
  font-size: 70px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 53px;
  background: linear-gradient(90deg, #A932E4 0%, #43057B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 767px) {
  .title {
    font-size: 35px;
    margin-bottom: 35px;
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 35px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: #36303A;
  border-radius: 12px;
  padding: 18px 22px;
  gap: 12px;
}

.input-icon {
  width: 24px;
  height: 24px;
  color: #A0A0A0;
}

.input {
  flex: 1;
  background: transparent;
  color: white;
  font-size: 20px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  
  &::placeholder {
    color: #A0A0A0;
  }
}

.forgot-password {
  text-align: right;
  
  a {
    color: #8307C1;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
  }
}

.divider {
  position: relative;
  text-align: center;
  margin: 35px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #3A3A42;
  }
  
  span {
    background: #231F26;
    padding: 0 16px;
    color: #8307C1;
    font-size: 18px;
    position: relative;
    font-family: 'Montserrat', sans-serif;
  }
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 35px;
}

.social-btn {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  background: #5C1585;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background: #4A1070;
    transform: scale(1.05);
  }
  
  svg {
    width: 35px;
    height: 35px;
  }
}

.register-link {
  text-align: center;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  
  a {
    color: #8307C1;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>