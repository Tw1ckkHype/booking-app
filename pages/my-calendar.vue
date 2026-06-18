<template>
  <div class="calendar-page">
    <div class="header">
      <button class="back-btn" @click="$router.back()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
    </div>
    
    <div class="content">
      <div class="calendar-layout">
        <div class="calendar-section">
          <div class="month-selector">
            <h2>МАЙ 2025</h2>
            <div class="month-nav">
              <button class="nav-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button class="nav-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="weekdays">
            <span v-for="day in weekdays" :key="day">{{ day }}</span>
          </div>
          <div class="days-grid">
            <div v-for="day in calendarDays" :key="day.date" 
                 class="day-cell" 
                 :class="{ 
                   'other-month': day.otherMonth,
                   'selected': day.selected,
                   'booked': day.booked
                 }">
              {{ day.day }}
            </div>
          </div>
        </div>
        
        <div class="events-section">
          <h3 class="section-title">Ваши события</h3>
          
          <div v-for="event in events" :key="event.id" class="event-item">
            <p class="event-date">{{ event.date }}:</p>
            <p class="event-name">{{ event.name }}</p>
            <div class="event-time">
              <span>{{ event.time }}</span>
              <button class="cancel-btn">Отменить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const calendarDays = [
  { day: 28, date: 28, otherMonth: true },
  { day: 29, date: 29, otherMonth: true },
  { day: 30, date: 30, otherMonth: true },
  { day: 1, date: 1 },
  { day: 2, date: 2 },
  { day: 3, date: 3 },
  { day: 4, date: 4 },
  { day: 5, date: 5 },
  { day: 6, date: 6 },
  { day: 7, date: 7 },
  { day: 8, date: 8 },
  { day: 9, date: 9 },
  { day: 10, date: 10 },
  { day: 11, date: 11 },
  { day: 12, date: 12 },
  { day: 13, date: 13 },
  { day: 14, date: 14 },
  { day: 15, date: 15 },
  { day: 16, date: 16 },
  { day: 17, date: 17 },
  { day: 18, date: 18 },
  { day: 19, date: 19 },
  { day: 20, date: 20 },
  { day: 21, date: 21, selected: true },
  { day: 22, date: 22 },
  { day: 23, date: 23 },
  { day: 24, date: 24, booked: true },
  { day: 25, date: 25 },
  { day: 26, date: 26 },
  { day: 27, date: 27, booked: true },
  { day: 28, date: 28 },
  { day: 29, date: 29 },
  { day: 30, date: 30 },
  { day: 31, date: 31 },
  { day: 1, date: 1, otherMonth: true }
]

const events = [
  { id: 1, date: '21 мая', name: 'Маникюр в студии "ВеМу"', time: '14:00' },
  { id: 2, date: '24 мая', name: 'Конференц-зал "Европа"', time: '20:00' },
  { id: 3, date: '24 мая', name: 'Фотограф на мероприятие', time: '18:00' }
]
</script>

<style scoped lang="scss">
.calendar-page {
  min-height: 100vh;
  background: #231F26;
  font-family: 'Montserrat', sans-serif;
}

.header {
  padding: 28px;
}

.back-btn {
  color: #8307C1;
  background: none;
  border: none;
  cursor: pointer;
  
  svg {
    width: 40px;
    height: 40px;
  }
}

.content {
  padding: 28px;
}

.calendar-layout {
  display: flex;
  flex-direction: column;
  gap: 42px;
}

@media (min-width: 768px) {
  .calendar-layout {
    flex-direction: row;
    gap: 70px;
  }
  
  .calendar-section {
    flex: 1;
  }
  
  .events-section {
    flex: 1;
  }
}

.month-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  margin-bottom: 42px;
  
  h2 {
    font-size: 42px;
    font-weight: 900;
    background: linear-gradient(90deg, #A731E2 0%, #4A0882 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
}

.month-nav {
  display: flex;
  gap: 14px;
}

.nav-btn {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #A731E2 0%, #4A0882 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  svg {
    width: 28px;
    height: 28px;
  }
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 28px;
  
  span {
    color: white;
    font-weight: 700;
    font-size: 22px;
    font-family: 'Montserrat', sans-serif;
  }
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 14px;
  text-align: center;
  justify-items: center;
}

.day-cell {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  font-size: 28px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  
  &.other-month {
    color: #A0A0A0;
    opacity: 0.5;
    cursor: default;
  }
  
  &.selected {
    border: 3px solid #8307C1;
    background: transparent;
    color: white;
  }
  
  &.booked {
    background: #8307C1;
    color: white;
  }
  
  &:hover:not(.other-month) {
    transform: scale(1.1);
  }
}

.section-title {
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 28px;
  background: linear-gradient(90deg, #9D00FF 0%, #9600F2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.event-item {
  margin-bottom: 35px;
}

.event-date {
  color: white;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 7px;
  font-family: 'Montserrat', sans-serif;
}

.event-name {
  font-size: 28px;
  margin-bottom: 14px;
  background: linear-gradient(90deg, #9D00FF 0%, #9600F2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Montserrat', sans-serif;
}

.event-time {
  display: flex;
  align-items: center;
  gap: 21px;
  background: #36303A;
  padding: 21px 28px;
  border-radius: 21px;
  
  span {
    flex: 1;
    color: white;
    font-size: 28px;
    font-family: 'Montserrat', sans-serif;
  }
}

.cancel-btn {
  color: #EF4444;
  background: #1A1A1F;
  padding: 14px 28px;
  border-radius: 14px;
  font-size: 21px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .calendar-page {
    padding-bottom: 80px;
  }

  .header {
    padding: 14px;
  }

  .back-btn svg {
    width: 28px;
    height: 28px;
  }

  .content {
    padding: 14px;
  }

  .calendar-layout {
    flex-direction: column !important;
    gap: 21px;
  }

  .calendar-section,
  .events-section {
    flex: none;
    width: 100%;
  }

  .month-selector {
    margin-bottom: 21px;
    gap: 10px;
  }

  .month-selector h2 {
    font-size: 22px;
  }

  .nav-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }

  .weekdays {
    margin-bottom: 14px;
    
    span {
      font-size: 12px;
    }
  }

  .days-grid {
    gap: 6px;
  }

  .day-cell {
    width: 36px;
    height: 36px;
    font-size: 14px;
    padding: 6px;
  }

  .section-title {
    font-size: 18px;
    margin-bottom: 14px;
  }

  .event-item {
    margin-bottom: 21px;
  }

  .event-date {
    font-size: 16px;
    margin-bottom: 7px;
  }

  .event-name {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .event-time {
    padding: 14px;
    border-radius: 14px;
    gap: 14px;
  }

  .event-time span {
    font-size: 16px;
  }

  .cancel-btn {
    padding: 10px 16px;
    font-size: 14px;
    border-radius: 10px;
  }
}

</style>