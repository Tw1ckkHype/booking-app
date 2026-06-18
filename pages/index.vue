<template>
  <div class="splash-screen" @click="navigateTo('/login')">
    <svg class="organic-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <path d="M0,200 C200,150 400,250 600,200 C800,150 1000,250 1200,200 C1300,180 1400,190 1440,200" 
            fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2"/>
      <path d="M0,400 C150,350 300,450 500,400 C700,350 850,450 1050,400 C1200,370 1350,390 1440,400" 
            fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="2"/>
      <path d="M0,600 C200,550 350,650 550,600 C750,550 900,650 1100,600 C1250,570 1400,590 1440,600" 
            fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2"/>
      <path d="M0,100 Q300,50 500,150 T900,100 T1440,150" 
            fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
      <path d="M0,750 Q400,700 600,800 T1100,750 T1440,800" 
            fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1.5"/>
      <path d="M200,0 Q250,300 200,500 T150,900" 
            fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="2"/>
      <path d="M600,0 Q650,250 600,450 T550,900" 
            fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="2"/>
      <path d="M1000,0 Q1050,300 1000,500 T950,900" 
            fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1.5"/>
      <path d="M1300,0 Q1350,200 1300,400 T1250,900" 
            fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="2"/>
    </svg>

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
  .title {
    font-size: 48px;
  }
  
  .subtitle {
    font-size: 24px;
  }
  
  .subtitle-wrapper {
    margin-right: 10%;
  }
}
</style>