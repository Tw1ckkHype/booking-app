<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import './assets/scss/variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
  position: relative;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #231F26;
  color: #FFFFFF;
  line-height: 1.5;
}

// Скрыть горизонтальную прокрутку везде
::-webkit-scrollbar {
  width: 8px;
  height: 0; // скрыть горизонтальный скроллбар
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #3A3A42;
  border-radius: 4px;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

input {
  border: none;
  outline: none;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>