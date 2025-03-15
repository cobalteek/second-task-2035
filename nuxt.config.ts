export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Second Task 2035',
      title: '0.0.1',
    }
  },
  devtools: {
    enabled: false,

    timeline: {
      enabled: true
    }
  },
  css: ['~/assets/main.scss'],

  modules: [
    '@pinia/nuxt',
    'unplugin-icons/nuxt'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})