# 🚀 React Redux User Management App

This project is a **React + Redux Toolkit** application that fetches user details dynamically based on the URL. It uses **React Router**, **Redux Thunk**, and **Material UI** for styling.

---

## **📌 Features**
- 🔹 **User Profile Fetching** → Load user details dynamically from an API.
- 🔹 **React Router** → Show profile pages only when a valid username is provided.
- 🔹 **Redux Toolkit (RTK)** → Manages API state efficiently.
- 🔹 **Thunk Middleware** → Handles asynchronous API calls.
- 🔹 **Lazy Loading (`React.lazy`)** → Improves performance by loading components dynamically.
- 🔹 **Custom Hooks** → Encapsulates API calls inside `useFetchUser()` for reusability.
- 🔹 **Material UI** → Enhances UI with modern components.

---

## **📌 Tech Stack**
- ⚛ **React** (with Vite)
- 🔥 **Redux Toolkit**
- 🔄 **Redux Thunk**
- 🚀 **React Router**
- 🎨 **Material UI**
- 🔄 **Axios** (for API calls)

---

## **📌 Folder Structure**
src/ 
│── components/ 
│ ├── Navbar.tsx # Navigation Bar 
│ ├── Home.tsx # Home Page │ 
  ├── UserProfile.tsx # User Profile Page (Lazy Loaded) │ ├── NotFound.tsx # 404 Page │ │── hooks/ │ ├── useFetchUser.ts # Custom Hook for API Calls │ │── store/ │ ├── movieSlice.ts # Redux Slice for Fetching Users │ ├── store.ts # Redux Store Configuration │ │── App.tsx # Main Application │── main.tsx # Entry Point │── index.css # Global Styles │── README.md # Project Documentation

yaml
Copy
Edit

---

## **📌 How to Run the Project**
### **Step 1️⃣: Clone the Repository**
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
Step 2️⃣: Install Dependencies
bash
Copy
Edit
npm install
Step 3️⃣: Start the Development Server
bash
Copy
Edit
npm run dev
Step 4️⃣: Open in Browser
Navigate to http://localhost:5173 (if using Vite).
📌 API Used
This project uses JSONPlaceholder for fetching users.

🔗 API Endpoint:

bash
Copy
Edit
https://jsonplaceholder.typicode.com/users?username={username}
📌 Example: Fetch user Bret

bash
Copy
Edit
https://jsonplaceholder.typicode.com/users?username=Bret
📌 Redux Setup & Explanation
1️⃣ Store Configuration (store.ts)
Stores the Redux state globally.
Defines RootState & AppDispatch for TypeScript.