export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Бронирование ресурсов',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
    baseURL: '/booking-app/'
  },
  compatibilityDate: '2024-01-01'
})