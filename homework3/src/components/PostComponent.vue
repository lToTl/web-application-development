<template>
  <article v-if="post" class="post-card">
    <div class="post-header">
      <div class="post-author">
        <img :src="post.authorAvatar" :alt="post.authorName" class="author-avatar" />
        <span class="author-name">{{ post.authorName }}</span>
      </div>
      <span class="post-date">{{ post.createTime }}</span>
    </div>

    <img
      v-if="post.image"
      :src="post.image"
      :alt="post.body"
      class="post-image"
    />

    <p class="post-body">{{ post.body }}</p>

    <div class="post-footer">
      <button
        type="button"
        class="like-button"
        aria-label="Like post"
        @click="likePost"
      >
        <img src="res/like.svg" alt="Like" />
      </button>
      <span class="likes-count">{{ post.likes }} likes</span>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostComponent',
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  computed: {
    post() {
      return this.$store.getters.getPostById(this.postId)
    }
  },
  methods: {
    likePost() {
      this.$store.commit('incrementLike', this.postId)
    }
  }
}
</script>

<style scoped>
.post-card {
  background-color: #dce1e7;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.author-name {
  font-size: 0.9rem;
  font-weight: bold;
  color: #1e293b;
}

.post-date {
  font-size: 0.85rem;
  color: #475569;
}

.post-image {
  width: 100%;
  border-radius: 6px;
  display: block;
}

.post-body {
  color: #0f172a;
  font-size: 1rem;
  text-align: left;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

.like-button:hover {
  opacity: 0.75;
}

.like-button img {
  width: 24px;
  height: 24px;
  display: block;
}

.likes-count {
  font-size: 0.95rem;
  font-weight: bold;
  color: #334155;
}
</style>
