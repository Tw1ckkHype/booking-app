<template>
  <div class="booking-page">
    <div class="header">
      <button class="back-btn" @click="$router.back()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
    </div>
    
    <div class="content">
      <div class="booking-layout">
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
        
        <div class="booking-section">
          <h3 class="section-title">МАНИКЮР В СТУДИИ "ВеМу"</h3>
          <p class="time-label">Время на 21 мая:</p>
          
          <div class="time-slots">
            <div v-for="slot in timeSlots" :key="slot.time" class="time-slot">
              <span class="time">{{ slot.time }}</span>
              <button class="book-btn" :class="{ disabled: slot.taken }">
                {{ slot.taken ? 'Время занято' : 'Забронировать' }}
              </button>
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
  { day: 22, date: 22, booked: true },
  { day: 23, date: 23, booked: true },
  { day: 24, date: 24, booked: true },
  { day: 25, date: 25, booked: true },
  { day: 26, date: 26, booked: true },
  { day: 27, date: 27, booked: true },
  { day: 28, date: 28, booked: true },
  { day: 29, date: 29, booked: true },
  { day: 30, date: 30, booked: true },
  { day: 31, date: 31, booked: true },
  { day: 1, date: 1, otherMonth: true }
]

const timeSlots = [
  { time: '12:00', taken: false },
  { time: '14:00', taken: true },
  { time: '16:00', taken: false },
  { time: '18:00', taken: false },
  { time: '20:00', taken: false }
]
</script>

<style scoped lang="scss">
.booking-page {
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

.booking-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 768px) {
  .booking-layout {
    flex-direction: row;
    gap: 40px;
  }
  
  .calendar-section {
    flex: 1;
  }
  
  .booking-section {
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
}

.time-label {
  color: white;
  font-size: 18px;
  margin-bottom: 16px;
}

.time-slots {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.time-slot {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #2D2D35;
  padding: 12px 16px;
  border-radius: 12px;
}

.time {
  flex: 1;
  font-size: 18px;
  color: white;
}

.book-btn {
  background: #7C3AED;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  min-width: 150px;
  
  &.disabled {
    background: #2D2D35;
    color: #EF4444;
  }
}
</style>