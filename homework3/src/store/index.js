import { createStore } from 'vuex'

export default createStore({
  strict: true,

  state: {
    posts: [
      {
        id: 1,
        authorName: 'John Doe',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Oct 22, 2022',
        body: 'Tartu 2022',
        image: 'res/tartu.jpg',
        likes: 21
      },
      {
        id: 2,
        authorName: 'Jane Smith',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Oct 2, 2022',
        body: 'Anyone knows in which room is the lab today?',
        image: null,
        likes: 11
      },
      {
        id: 3,
        authorName: 'Martin Tamm',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Sep 28, 2022',
        body: 'Beautiful autumn afternoon at Universitas Tartuensis.',
        image: 'res/tartu_university.jpg',
        likes: 8
      },
      {
        id: 4,
        authorName: 'Laura Kask',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Sep 25, 2022',
        body: 'Reminder: The lecture slides for Web Application Development are available on Moodle.',
        image: null,
        likes: 4
      },
      {
        id: 5,
        authorName: 'Rasmus Saar',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Sep 20, 2022',
        body: 'Team study session preparing for the lab discussion at the Delta Centre.',
        image: 'res/study_lab.jpg',
        likes: 15
      },
      {
        id: 6,
        authorName: 'Katrin Magi',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Sep 18, 2022',
        body: 'Does anyone want to form a study group for the JavaScript Fetch API exercises?',
        image: null,
        likes: 3
      },
      {
        id: 7,
        authorName: 'Sander Koppel',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Sep 15, 2022',
        body: 'Morning walk across Town Hall Square before the 10:15 lecture.',
        image: 'res/tartu.jpg',
        likes: 9
      },
      {
        id: 8,
        authorName: 'Helena Oja',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Sep 12, 2022',
        body: 'Just validated our JSON file using JSONLint — zero syntax errors!',
        image: null,
        likes: 6
      },
      {
        id: 9,
        authorName: 'Karl Ilves',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Sep 10, 2022',
        body: 'Working on Flexbox layouts and DOM manipulation in the computer lab.',
        image: 'res/study_lab.jpg',
        likes: 12
      },
      {
        id: 10,
        authorName: 'Liisa Kuusk',
        authorAvatar: 'res/avatar.svg',
        createTime: 'Sep 5, 2022',
        body: 'Welcome to the new semester at the University of Tartu!',
        image: 'res/tartu_university.jpg',
        likes: 7
      }
    ]
  },

  getters: {
    allPosts: (state) => state.posts,
    getPostById: (state) => (id) => state.posts.find((post) => post.id === id)
  },

  mutations: {
    incrementLike(state, postId) {
      const post = state.posts.find((p) => p.id === postId)
      if (post) {
        post.likes += 1
      }
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0
      })
    }
  }
})
