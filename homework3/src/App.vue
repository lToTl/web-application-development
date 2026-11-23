<template>
  <div class="app-container">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f1f5f9;
  color: #1e293b;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 12px;
}
</style>
