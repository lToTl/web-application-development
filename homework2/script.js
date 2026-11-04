// ==========================================================================
// Web Application Development - Homework 2
// Dynamic Posts (Fetch API) & User Profile Dropdown Menu
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // Task 7: Dropdown menu toggle when clicking on the personal photo
  // ------------------------------------------------------------------------
  const avatarBtn = document.getElementById('avatar-btn');
  const dropdownMenu = document.getElementById('profile-dropdown');

  if (avatarBtn && dropdownMenu) {
    avatarBtn.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  }

  // ------------------------------------------------------------------------
  // Tasks 4, 5 & 6: Fetch posts from JSON and dynamically create DOM elements
  // ------------------------------------------------------------------------
  const postsContainer = document.getElementById('posts-container');
  if (!postsContainer) return;

  // Task 3 & Task 4: Fetch posts from online endpoint (URI)
  // (Commented out as required by Task 5: "do not delete the code related to
  // fetching the data from the online source (task 4); just comment it out.")
  /*
  const onlineEndpoint = 'https://raw.githubusercontent.com/lToTl/web-application-development/main/homework2/posts.json';
  fetch(onlineEndpoint)
    .then((response) => response.json())
    .then((posts) => renderPosts(posts, postsContainer))
    .catch((error) => console.error('Error fetching online posts:', error));
  */

  // Task 5: Fetch posts from the local JSON file integrated into the project
  fetch('posts.json')
    .then((response) => response.json())
    .then((posts) => renderPosts(posts, postsContainer))
    .catch((error) => {
      console.warn('Fetch blocked on file:// protocol; using fallback data:', error);
      renderPosts(FALLBACK_POSTS, postsContainer);
    });
});

// Fallback copy of posts.json so opening index.html directly via file:// also works
const FALLBACK_POSTS = [
  {
    id: 1,
    authorName: 'John Doe',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Oct 22, 2022',
    body: 'Tartu 2022',
    image: 'res/tartu.jpg'
  },
  {
    id: 2,
    authorName: 'Jane Smith',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Oct 2, 2022',
    body: 'Anyone knows in which room is the lab today?',
    image: null
  },
  {
    id: 3,
    authorName: 'Martin Tamm',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Sep 28, 2022',
    body: 'Beautiful autumn afternoon at Universitas Tartuensis.',
    image: 'res/tartu_university.jpg'
  },
  {
    id: 4,
    authorName: 'Laura Kask',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Sep 25, 2022',
    body: 'Reminder: The lecture slides for Web Application Development are available on Moodle.',
    image: null
  },
  {
    id: 5,
    authorName: 'Rasmus Saar',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Sep 20, 2022',
    body: 'Team study session preparing for the lab discussion at the Delta Centre.',
    image: 'res/study_lab.jpg'
  },
  {
    id: 6,
    authorName: 'Katrin Magi',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Sep 18, 2022',
    body: 'Does anyone want to form a study group for the JavaScript Fetch API exercises?',
    image: null
  },
  {
    id: 7,
    authorName: 'Sander Koppel',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Sep 15, 2022',
    body: 'Morning walk across Town Hall Square before the 10:15 lecture.',
    image: 'res/tartu.jpg'
  },
  {
    id: 8,
    authorName: 'Helena Oja',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Sep 12, 2022',
    body: 'Just validated our JSON file using JSONLint — zero syntax errors!',
    image: null
  },
  {
    id: 9,
    authorName: 'Karl Ilves',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Sep 10, 2022',
    body: 'Working on Flexbox layouts and DOM manipulation in the computer lab.',
    image: 'res/study_lab.jpg'
  },
  {
    id: 10,
    authorName: 'Liisa Kuusk',
    authorAvatar: 'res/avatar.svg',
    createTime: 'Sep 5, 2022',
    body: 'Welcome to the new semester at the University of Tartu!',
    image: 'res/tartu_university.jpg'
  }
];

/**
 * Dynamically creates and appends post <article> elements into container.
 */
function renderPosts(posts, container) {
  posts.forEach((post) => {
    const article = document.createElement('article');

    // Post header: author avatar + author name on left, creation time on right
    const headerDiv = document.createElement('div');
    headerDiv.className = 'post-header';

    const authorInfo = document.createElement('div');
    authorInfo.className = 'post-author';

    const avatarImg = document.createElement('img');
    avatarImg.src = post.authorAvatar;
    avatarImg.alt = post.authorName;

    const authorNameSpan = document.createElement('span');
    authorNameSpan.className = 'author-name';
    authorNameSpan.textContent = post.authorName;

    authorInfo.appendChild(avatarImg);
    authorInfo.appendChild(authorNameSpan);

    const dateSpan = document.createElement('span');
    dateSpan.className = 'post-date';
    dateSpan.textContent = post.createTime;

    headerDiv.appendChild(authorInfo);
    headerDiv.appendChild(dateSpan);
    article.appendChild(headerDiv);

    // Task 6: Only create an <img> element if the post object includes an image path/URL
    if (post.image) {
      const postImg = document.createElement('img');
      postImg.src = post.image;
      postImg.alt = post.body;
      postImg.className = 'post-image';
      article.appendChild(postImg);
    }

    // Post text/message (every post has text as shown in Figure 1)
    const bodyP = document.createElement('p');
    bodyP.textContent = post.body;
    article.appendChild(bodyP);

    // Like button
    const likeBtn = document.createElement('button');
    likeBtn.type = 'button';
    likeBtn.className = 'like-button';
    likeBtn.setAttribute('aria-label', 'Like post');

    const likeImg = document.createElement('img');
    likeImg.src = 'res/like.svg';
    likeImg.alt = 'Like';

    likeBtn.appendChild(likeImg);
    article.appendChild(likeBtn);

    container.appendChild(article);
  });
}
