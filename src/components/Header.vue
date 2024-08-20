<template>
  <header>
    <h1>Kanban Task Manager</h1>
    <nav>
      <button @click="goToDashboard">Dashboard</button>
      <button @click="goToProfile">Profile</button>
      <button @click="logout">Logout</button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    goToDashboard() {
      this.$router.push({ name: 'Dashboard' });
    },
    goToProfile() {
      this.$router.push({ name: 'Profile' });
    },
    logout() {
      this.$cookies.remove('authToken');
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f9fa;
}

nav button {
  margin-left: 10px;
}
</style>
