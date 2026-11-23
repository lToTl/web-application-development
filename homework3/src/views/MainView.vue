<template>
  <div class="main-layout">
    <aside class="sidebar"></aside>

    <main class="posts-column">
      <PostComponent
        v-for="post in posts"
        :key="post.id"
        :postId="post.id"
      />

      <button type="button" class="reset-btn" @click="resetAllLikes">
        Reset likes
      </button>
    </main>

    <aside class="sidebar"></aside>
  </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue'

export default {
  name: 'MainView',
  components: {
    PostComponent
  },
  computed: {
    posts() {
      return this.$store.getters.allPosts
    }
  },
  methods: {
    resetAllLikes() {
      this.$store.commit('resetLikes')
    }
  }
}
</script>

<style scoped>
.main-layout {
  flex: 1;
  display: flex;
  gap: 16px;
  width: 100%;
}

.sidebar {
  flex: 1;
  background-color: #cbd5e1;
  border-radius: 10px;
}

.posts-column {
  flex: 0 1 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 4px 0;
}

.reset-btn {
  background-color: #6b93c9;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 24px;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 4px;
}

.reset-btn:hover {
  background-color: #4f79b5;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .posts-column {
    flex: 1;
  }
}
</style>
