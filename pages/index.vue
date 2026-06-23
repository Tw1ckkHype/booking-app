<template>
  <div class="splash-screen" @click="navigateTo('/login')">
    <!-- Desktop линии -->
    <img class="organic-lines desktop-lines" src="/images/lines-desktop.svg" alt="" />
    
    <!-- Mobile линии -->
    <img class="organic-lines mobile-lines" src="/images/lines-mobile.svg" alt="" />

    <div class="content">
      <h1 class="title">Бронирование</h1>
      <div class="subtitle-wrapper">
        <p class="subtitle">общих ресурсов</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.splash-screen {
  min-height: 100vh;
  background: linear-gradient(180deg, #7C07B8 0%, #1D1331 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
}

.organic-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
  pointer-events: none;
}

.desktop-lines {
  display: block;
}

.mobile-lines {
  display: none;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  width: 100%;
  max-width: 1200px;
}

.title {
  font-size: 96px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
  font-family: 'Montserrat', sans-serif;
}

.subtitle-wrapper {
  align-self: flex-end;
  margin-right: 18%;
}

.subtitle {
  font-size: 40px;
  color: #ffffff;
  font-weight: 400;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Montserrat', sans-serif;
  text-align: right;
}

@media (max-width: 768px) {
  .desktop-lines {
    display: none;
  }

  .mobile-lines {
    display: block;
  }

  .title {
    font-size: 36px;
    margin-bottom: 12px;
  }
  
  .subtitle {
    font-size: 18px;
  }
  
  .subtitle-wrapper {
    margin-right: 16%;
  }
}

@media (max-width: 375px) {
  .title {
    font-size: 32px;
  }
  
  .subtitle {
    font-size: 16px;
  }
}
</style>