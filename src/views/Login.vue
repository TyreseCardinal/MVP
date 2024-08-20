<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>
        Username:
        <input v-model="username" required />
      </label>
      <label>
        Password:
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <router-link to="/register">Register</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Replace with your authentication logic
      this.$http.post('/api/login', { username: this.username, password: this.password })
        .then(response => {
          this.$cookies.set('authToken', response.data.token);
          this.$router.push({ name: 'Dashboard' });
        })
        .catch(error => {
          console.error('Login error:', error);
        });
    }
  }
};
</script>
