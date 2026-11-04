# Web Application Development (UT 2026)

Course repository for Web Application Development at the University of Tartu.
Each homework assignment is kept in its own directory (`homework1/`, `homework2/`).

---

## 🛠️ Disclaimer of Used Tools & AI Assistance

In accordance with the course's **AI-Assisted Coding** policy:
> *Students may use AI-assisted coding tools when completing the homework. However, you are fully responsible for the code you submit. You should understand how your code works and be able to explain and answer questions about any part of your submitted code.*

* **AI Assistance:** Google Antigravity (Gemini model) was used as a pair-programming coding assistant to help structure the JSON dataset, write standard JavaScript `fetch()` and DOM manipulation logic, implement the profile dropdown menu, and format this documentation.
* **Development & Version Control:** Visual Studio Code / Antigravity IDE, Git, and GitHub Pages.

---

## 📂 Repository Structure

```text
├── homework1/                  # Homework 1: HTML & CSS (Static PostIt)
├── homework2/                  # Homework 2: JavaScript, JSON & Fetch API (Dynamic PostIt)
│   ├── res/                    # Media assets (avatars, like icon, post photos)
│   ├── posts.json              # 10 post objects with author, date, body, and optional image path
│   ├── script.js               # Fetch API logic (online & local) + profile dropdown toggle
│   ├── index.html              # Main feed populated dynamically via JavaScript (Figure 1)
│   ├── addPost.html            # Post creation form with profile dropdown
│   ├── addPage.html            # Alias of addPost.html
│   ├── login.html              # Login form with validation
│   └── style.css               # Pure CSS (no Bootstrap) with Flexbox & dropdown styling
├── index.html                  # Redirects to homework2/index.html
├── submission.txt              # Moodle submission text file
├── Homework_1_2026.pdf         # Homework 1 specification
├── Homework_2_2026.pdf         # Homework 2 specification
└── README.md                   # Documentation and study guide
```

---

## 📖 Homework 2 Study Guide (Tasks 1–10)

Use this summary to prepare for the 10-minute lab discussion:

### 1. JSON File with 10 Post Objects (Task 1 — 1 point)
* Located at `homework2/posts.json`.
* Contains **10 objects** in a JSON array, each representing a post with literals:
  * `id`: unique integer ID (`1`–`10`)
  * `authorName`: string (e.g., `"John Doe"`)
  * `authorAvatar`: string path (`"res/avatar.svg"`)
  * `createTime`: string date (e.g., `"Oct 22, 2022"`)
  * `body`: string text message (all posts have text/message)
  * `image`: string path to photo (e.g., `"res/tartu.jpg"`) or `null` for posts without a photo.

### 2. Validating JSON Online (Task 2 — 1 point)
* Validated using **[JSONLint](https://jsonlint.com/)** (and standard `JSON.parse`) to ensure strict JSON syntax (double-quoted keys/strings, no trailing commas, valid data types).

### 3. Online Endpoint / URI for JSON (Task 3 — 1 point)
* Hosted online via GitHub Raw / GitHub Pages (as well as compatible with free JSON endpoints like [npoint.io](https://www.npoint.io/) or [jsonbin.io](https://jsonbin.io/)):
  `https://raw.githubusercontent.com/lToTl/web-application-development/main/homework2/posts.json`

### 4 & 5. Fetching Posts (Online vs. Local JSON) & Dynamic DOM Creation (Tasks 4 & 5 — 3 points)
* In `homework2/script.js`:
  * **Task 4 (Online Fetch):** Uses `fetch(onlineEndpoint)` to retrieve the JSON array from the remote URI. As required by Task 5, this block is **kept and commented out** right above the local fetch call.
  * **Task 5 (Local Fetch):** Uses `fetch('posts.json')` to load the local JSON file integrated into the project, parses it with `.then(response => response.json())`, and passes the array to `renderPosts()`.
  * **DOM Manipulation:** `renderPosts()` iterates through the posts with `.forEach()`, creates `<article>`, `.post-header`, `<p>`, and `<button>` elements via `document.createElement()`, and appends them into `<main id="posts-container">`.

### 6. Storing Photos in Text-Only JSON (Task 6 — 1 point)
* Since JSON is a text-only format, images are stored as **string paths/URLs** (e.g., `"image": "res/tartu.jpg"`) or `null` if a post has no photo (alternatively, Base64 data URLs could be used, but relative URLs/paths keep the JSON clean and lightweight).
* In `script.js`, an `if (post.image)` check dynamically creates and appends `<img class="post-image">` only when the post includes a photo.

### 7. User Profile Dropdown Menu (Task 7 — 1 point)
* Clicking the top-right avatar (`#avatar-btn`) triggers a `click` event listener in `script.js`:
  ```js
  avatarBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
  });
  ```
* Toggles the `.show` class on `#profile-dropdown`, opening and closing the menu displaying `John Doe`, `john.doe@ut.ee`, and `logout` (matching Figures 2 and 3).

### 8. Overall Styling Without Bootstrap (Task 8 — 1 point)
* Styled entirely in `homework2/style.css` using pure CSS and Flexbox (`display: flex`), with zero external CSS frameworks (no Bootstrap).
