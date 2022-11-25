# FireBlog App

## Description

It is a blog web page created using router, redux toolkit and firebase.

## Tools used in the project

- HTML

- CSS

- JS

- ReactJS

  - Styled Components
  - .map
  - BrowserRouter
  - Route
  - Routes
  - useNavigate
  - Navigate
  - React Icons
  - Outlet
  - useDispatch
  - useSelector
  - useState
  - useEffect
  - Link

- Firebase
  - Authentication
  - Realtime Database

<!-- ## Github-pages -->

## Pages

[ Project Website ](https://tangerine-naiad-3f53d2.netlify.app)

## Preview

![ Project Snapshot ](fireblogapp.gif)

## Project Skeleton

```
Blog Web Page (folder)
|
├── public
|     ├── images
│     └── index.html
|
├── src
│    ├── app
|    │       |
|    |       ├── features
|    │       |     ├── LoginSlice.jsx
|    │       |     └── ModalSlice.jsx
|    |       |
|    │       |
|    │       └── store.jsx
|    |
│    ├── components
|    │       |
|    |       ├── Card
|    │       |     ├── Card.jsx
|    │       |     └── Card-styled.jsx
|    |       |
|    |       ├── Comment
|    |       |     ├── Comment-func
|    |       |     |      ├── CommentDelete.js
|    │       |     |      └── CommentEdit.js
|    |       |     |
|    │       |     ├── Comment.jsx
|    │       |     └── Comment-styled.jsx
|    │       |
|    |       ├── DeleteModal
|    |       |     ├──  DeleteBlogfunc
|    │       |     |      └── DeleteBlog.js
|    |       |     |
|    │       |     ├── DeleteModal.jsx
|    │       |     └── DeleteModal-styled.jsx
|    │       |
|    |       ├── Modal
|    │       |     ├── Modal.jsx
|    │       |     └── Modal-styled.jsx
|    │       |
|    │       └── Navbar
|    │             ├── Navbar.jsx
|    │             └── navbar-styled.jsx
|    │
|    ├── helpers
|    │
|    ├── private
|    │       └── RouterPrivate.jsx
|    │
|    ├── pages
|    │       |
|    │       ├── About
|    │       |     ├── About.jsx
|    │       |     └── About-styled.jsx
|    │       |
|    │       ├── Dashboard
|    │       |     ├── Dashboard.jsx
|    │       |     └── Dashboard-styled.jsx
|    │       |
|    │       ├── Details
|    │       |     ├── Details.jsx
|    │       |     └── Details-styled.jsx
|    │       |
|    │       ├── NewBlog
|    │       |     ├── NewBlog.jsx
|    │       |     └── NewBlog-styled.jsx
|    │       |
|    │       ├── Profile
|    |       |     ├── ProfileUpdate
|    |       |     |       └── ProfileUpdate.js
|    |       |     |
|    │       |     ├── Profile.jsx
|    │       |     └── Profile-styled.jsx
|    │       |
|    │       ├── Register
|    │       |     └── Register.jsx
|    |       |
|    |       ├── Login
|    │       |     ├── login-styled.jsx
|    │       |     └── Login.jsx
|    |       |
|    │       └── UpdateBlog
|    |             ├── UpdateBlogFunc
|    |             |       └── UpdateBlogFunc.js
|    |             |
|    │             ├── UpdateBlog.jsx
|    │             └── update-styled.jsx
|    │
│    ├── App.js
│    ├── index.css
│    └── index.js
|
├── .env
├── package.json
├── yarn.lock
└── README.md
```
