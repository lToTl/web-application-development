# Web Application Development (UT 2026)

Course repository for Web Application Development at the University of Tartu.
Each homework assignment is kept in its own directory (e.g., `homework1/`).

---

## 🛠️ Disclaimer of Used Tools & AI Assistance

In accordance with the course's **AI-Assisted Coding** policy:
> *Students may use AI-assisted coding tools when completing the homework. However, you are fully responsible for the code you submit. You should understand how your code works and be able to explain and answer questions about any part of your submitted code.*

* **AI Assistance:** Google Antigravity (Gemini model) was used as a pair-programming coding assistant to help draft minimal semantic HTML structure, write standard CSS rules conforming to the course requirements, and format this documentation.
* **Development & Version Control:** Visual Studio Code / Antigravity IDE, Git, and GitHub Pages.
* **Student Responsibility:** All generated code has been reviewed, streamlined to the simplest possible implementation without extraneous libraries or tricks, and verified against each grading criterion. The student understands and is prepared to explain every HTML tag, CSS selector, and layout rule during the oral lab discussion.

---

## 📂 Repository Structure

```text
├── homework1/                  # Homework 1: HTML & CSS (PostIt)
│   ├── res/                    # Media assets
│   │   ├── avatar.svg          # User avatar placeholder
│   │   ├── like.svg            # Thumbs-up like icon
│   │   ├── tartu.jpg           # Tartu Town Hall Square photo
│   │   ├── tartu_university.jpg# University of Tartu Main Building photo
│   │   └── study_lab.jpg       # Students study session photo
│   ├── index.html              # Main feed with 5 posts (Figure 1)
│   ├── addPost.html            # Post creation form (Figure 2)
│   ├── addPage.html            # Alias of addPost.html matching spec wording
│   ├── login.html              # Login form with field validation (Figure 3)
│   └── style.css               # Minimal CSS with Flexbox & 5 required selectors
├── index.html                  # Minimal redirect to homework1/index.html
├── .gitignore                  # Standard ignore file
├── Homework_1_2026.pdf         # Assignment specification
└── README.md                   # Documentation and disclaimer
```

---

## 📖 Study Guide: How Each Requirement is Implemented

Use this summary to prepare for the 10-minute lab discussion:

### 1. Three HTML Pages (Task 1)
* `index.html`: Displays the PostIt feed with 5 distinct posts (matching Figure 1).
* `addPost.html` (and `addPage.html`): Form containing a textarea, file input, and submit button (matching Figure 2).
* `login.html`: Card containing email, password, and login button (matching Figure 3).

### 2. Navigation Bar (Requirement 2 — 1 point)
* Links for **Home** and **addPost** are placed in `<nav>`.
* Pressing them navigates to the respective page (`href="index.html"`, `href="addPost.html"`).
* Hovering changes their background color using CSS pseudo-class:
  ```css
  nav a:hover {
    background-color: #94a3b8;
  }
  ```

### 3. Posts on Feed (Requirement 2 — 1 point)
* `index.html` contains 5 distinct posts wrapped in `<article>`.
* Matches Figure 1: includes author avatar, post date, post message/text, and like button.
* Includes both posts with photos (Tartu landmarks) and posts without photos.

### 4. Form Redirection & Validation (Requirement 2 & 3 — 2.5 points)
* **Redirection on button press:** Both `<form action="index.html" method="get">` forms natively submit and redirect the browser to `index.html` upon clicking the submit buttons.
* **Required login fields:** `<input type="email" required>` and `<input type="password" required>` use native HTML5 validation. The browser blocks form submission if either field is left empty.

### 5. Semantic HTML Elements (Requirement 3 — 0.5 point)
* Used `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>` appropriately rather than generic `<div>` containers.

### 6. Five Required CSS Selectors (Requirement 4 — 2.5 points)
All 5 selectors are clearly labeled in `homework1/style.css`:
1. **Pseudo-class:** `nav a:hover` (also handles nav hover).
2. **Descendant Selector:** `main article p` (selects `<p>` within `<article>` within `<main>`).
3. **Child Selector:** `main > article` (selects `<article>` directly inside `<main>`).
4. **Adjacent Sibling Selector:** `label + textarea` and `label + input` (selects input/textarea directly following its `<label>`).
5. **General Sibling Selector:** `h2 ~ p` (selects `<p>` elements preceded by `<h2>` in the login card).

### 7. Flexbox & Mobile Responsiveness (Requirement 5 — 1 point)
* `body` is a flex container (`display: flex; flex-direction: column; min-height: 100vh;`) ensuring sticky-like footer placement.
* `<header>`, `<nav>`, and `<main>` use Flexbox for alignment and centering.
* Media query for cellphone screens (`@media (max-width: 600px)`): sets `max-width: 100%` on cards/forms so they adapt cleanly to mobile viewports.
