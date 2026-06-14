export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/booking-app/',
    head: {
      title: 'Бронирование ресурсов',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  router: {
    options: {
      hashMode: true
    }
  },
  compatibilityDate: '2024-01-01'
})