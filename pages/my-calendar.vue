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
  background: #1A1A1F;
}

.header {
  padding: 16px;
}

.back-btn {
  color: #7C3AED;
  background: none;
  border: none;
  cursor: pointer;
  
  svg {
    width: 32px;
    height: 32px;
  }
}

.content {
  padding: 16px;
}

.calendar-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 768px) {
  .calendar-layout {
    flex-direction: row;
    gap: 40px;
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
  gap: 16px;
  margin-bottom: 24px;
  
  h2 {
    color: #7C3AED;
    font-size: 24px;
  }
}

.month-nav {
  display: flex;
  gap: 8px;
}

.nav-btn {
  width: 40px;
  height: 40px;
  background: #7C3AED;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  cursor: pointer;
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 16px;
  
  span {
    color: white;
    font-weight: 700;
    font-size: 16px;
  }
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  text-align: center;
}

.day-cell {
  padding: 12px;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  cursor: pointer;
  
  &.other-month {
    color: #A0A0A0;
    opacity: 0.5;
  }
  
  &.selected {
    border: 2px solid #7C3AED;
  }
  
  &.booked {
    background: #7C3AED;
    color: white;
  }
}

.section-title {
  color: #7C3AED;
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
}

.event-item {
  margin-bottom: 24px;
}

.event-date {
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.event-name {
  color: #7C3AED;
  font-size: 18px;
  margin-bottom: 12px;
}

.event-time {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #2D2D35;
  padding: 12px 16px;
  border-radius: 12px;
  
  span {
    flex: 1;
    color: white;
    font-size: 18px;
  }
}

.cancel-btn {
  color: #EF4444;
  background: #25252B;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  cursor: pointer;
}
</style>