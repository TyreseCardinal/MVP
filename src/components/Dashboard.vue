<template>
  <div>
    <h2>Your Projects</h2>
    <button @click="createProject">Create New Project</button>
    <ul>
      <li v-for="project in projects" :key="project.id" @click="goToProject(project.id)">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []  // This would be fetched from your API
    };
  },
  methods: {
    goToProject(id) {
      this.$router.push({ name: 'Project', params: { id } });
    },
    createProject() {
      // Logic to create a new project
    }
  }
};
</script>
