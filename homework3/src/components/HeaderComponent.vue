<template>
  <header class="app-header">
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <span class="separator">|</span>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.app-header {
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 16px 20px;
  text-align: center;
}

.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.nav-links a {
  text-decoration: none;
  color: #0f172a;
  font-weight: bold;
  font-size: 1.05rem;
  padding: 6px 14px;
  border-radius: 6px;
}

.nav-links a:hover {
  background-color: #94a3b8;
}

.nav-links a.router-link-exact-active {
  background-color: #64748b;
  color: #ffffff;
}

.separator {
  color: #475569;
  font-weight: bold;
}
</style>
