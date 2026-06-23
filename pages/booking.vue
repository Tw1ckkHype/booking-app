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
            <h2 class="month-title">МАЙ 2025</h2>
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

.booking-layout {
  display: flex;
  flex-direction: column;
  gap: 42px;
}

@media (min-width: 768px) {
  .booking-layout {
    flex-direction: row;
    gap: 70px;
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
  gap: 28px;
  margin-bottom: 42px;
  
  .month-title {
    font-size: 36px;
    font-weight: 900;
    background: linear-gradient(90deg, #A731E2 0%, #4A0882 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    text-align: center;
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
    background: #230726;
    color: #8307C1;
  }
  
  &:hover:not(.other-month) {
    transform: scale(1.1);
  }
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
  background: linear-gradient(90deg, #9D00FF 0%, #9600F2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  border-top: 1px solid #3A3A42;
  border-bottom: 1px solid #3A3A42;
  padding: 14px 0;
}

.time-label {
  color: white;
  font-size: 24px;
  margin-bottom: 28px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.time-slots {
  display: flex;
  flex-direction: column;
  gap: 21px;
}

.time-slot {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #36303A;
  padding: 14px 21px;
  border-radius: 14px;
  border: none;
}

.time {
  flex: 1;
  font-size: 28px;
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.book-btn {
  background: linear-gradient(135deg, #A731E2 0%, #4A0882 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  min-width: 180px;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s;
  margin-left: auto;
  
  &:hover:not(.disabled) {
    opacity: 0.9;
    transform: scale(1.02);
  }
  
  &.disabled {
    background: #1A1A1F;
    color: #EF4444;
    cursor: default;
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .header {
    padding: 14px;
  }

  .back-btn svg {
    width: 28px;
    height: 28px;
  }

  .content {
    padding: 14px 14px 0 14px; /* убрали padding снизу */
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .booking-layout {
    flex-direction: column !important;
    gap: 14px;
    width: 100%;
  }

  .calendar-section,
  .booking-section {
    flex: none;
    width: 100%;
    max-width: 100%;
  }

  .month-selector {
    margin-bottom: 14px;
    gap: 10px;
  }

  .month-selector h2 {
    font-size: 20px;
  }

  .nav-btn {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }

  .weekdays {
    margin-bottom: 8px;
    
    span {
      font-size: 10px;
    }
  }

  .days-grid {
    gap: 3px;
    width: 100%;
  }

  .day-cell {
    width: 30px;
    height: 30px;
    font-size: 11px;
    padding: 3px;
  }

  .section-title {
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
    border-top: 1px solid #3A3A42;
    border-bottom: 1px solid #3A3A42;
    padding: 10px 0;
  }

  .time-label {
    font-size: 13px;
    margin-bottom: 10px;
    text-align: center;
  }

  .time-slots {
    gap: 6px;
    padding-bottom: 0; /* убрали отступ снизу */
    margin-bottom: 0; /* убрали отступ снизу */
  }

  .time-slot {
    padding: 8px 10px;
    border-radius: 10px;
    gap: 8px;
    border: none;
    
    &:last-child {
      margin-bottom: 0; /* последний слот без отступа */
    }
  }

  .time {
    font-size: 13px;
    text-align: center;
  }

  .book-btn {
    padding: 8px 12px;
    font-size: 11px;
    min-width: auto;
    margin-left: 0;
    white-space: nowrap;
    border-radius: 8px;
  }
}
</style>