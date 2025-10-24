# 🧠 Brain Battle Royale: Interactive Trivia Quiz App

Welcome to **Brain Battle Royale**! This is a dynamic, responsive single-page application (SPA) built to let users test their knowledge across various trivia categories. It's designed for a smooth, clean, and fun user experience from start to finish.

---

## ✨ Key Features

We focused on building a seamless and engaging quiz flow:

* **Custom Setup:** Start by entering your name and selecting a quiz category (e.g., General Knowledge, Movies, Computers).
* **Dynamic Content:** Questions are fetched on demand from an external API, ensuring a new quiz experience every time.
* **Clear Visual Feedback:** Get instant **Green/Red** cues after selecting an answer, clearly indicating if your choice was correct or incorrect.
* **Global Score Tracking:** Your username and score are tracked efficiently throughout the application using **React's Context API**.
* **Responsive Design:** Optimized layout for excellent viewing on any device, from a large desktop monitor to a small mobile phone.

---

## 🛠 Tech Stack

This project is built using modern, industry-standard tools to ensure reliability and maintainability:

| Technology | Purpose |
| :--- | :--- |
| **React** | The core library for building the fast, interactive user interface. |
| **TypeScript (TSX)** | Provides strong typing to catch errors early and make the code more robust. |
| **React Router DOM** | Handles seamless navigation between the Home, Quiz, and Result pages. |
| **Context API** | Manages global application state (username, score, quiz data) efficiently. |
| **Axios** | A promise-based HTTP client used to fetch questions from the external API. |
| **Bootstrap** | Provides the responsive styling and component structure. |

---

## 🚀 Getting Started

Follow these simple steps to run this quiz app locally on your machine.

### Prerequisites

You need to have **Node.js** and **npm** (or Yarn/pnpm) installed on your system.

### Installation & Run

1.  **Clone the Repository** (or download the ZIP file):
    ```bash
    git clone https://github.com/nilaybasak111/Brain-Battle-Royale-Quiz-Frontend.git
    cd Brain-Battle-Royale-Quiz-Frontend
    ```

2.  **Install Dependencies**
    Use your preferred package manager:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set Up the API Endpoint**
    The app fetches questions from a public API. Create a file named **`.env`** in the root directory and add the following line:

    ```
    VITE_BACKEND_API="Your Backend API"
    ```

4.  **Start the Application**
    Launch the development server. The app will usually open automatically in your browser (e.g., `http://localhost:5173/`).
    ```bash
    npm run dev
    # or
    yarn dev
    ```

---

## 📁 Project Structure

The code is logically organized into folders for easy navigation and maintenance:

```plaintext
.
├── index.html                # The entry point of the application (root HTML file)
└── src/
    ├── components/
    │   ├── Home.tsx          # User entry and category selection screen
    │   ├── QuizPage.tsx      # Main quiz display and answer handling logic
    │   ├── Result.tsx        # Final score summary and play again option
    │   └── PageNotFound.tsx  # 404 handler for invalid routes
    │
    ├── context/
    │   └── UserContext.tsx   # Defines the structure and state for global data
    │
    └── App.tsx               # Defines all routing paths using React Router

```

## 📈 Project Improvement Scope

While the application is fully functional, here are key areas for future development to enhance user experience, robustness, and flexibility:

### 1. User Experience & Features

* **Advanced Quiz Customization:** Enhance the `Home.tsx` interface to allow users to select:
    * **Difficulty:** Easy, Medium, or Hard.
    * **Question Count:** 5, 10, or 20 questions.
* **Real-time Feedback:** Implement a **timer or countdown** on `QuizPage.tsx` to add pressure and track the user's reaction time.
* **Detailed Results Breakdown:** In `Result.tsx`, display not just the total score, but a summary of questions answered correctly per category.
* **Accessibility (A11y):** Review the application to ensure full keyboard navigation support, high color contrast, and proper ARIA labels.

### 2. Code & Data Management

* **Centralized Configuration:** Move the hardcoded category IDs and API parameters (e.g., `amount=10&category=9`) from `Home.tsx` into a separate, structured configuration file (e.g., a TypeScript enum or JSON file).
* **Dedicated Loading State:** Implement a **global loading spinner** or skeleton screen that appears when questions are being fetched (before navigating from `Home.tsx` to `QuizPage.tsx`).
* **Error Boundaries:** Introduce React Error Boundaries to gracefully catch and display errors within components, preventing the entire application from crashing.

### 3. Future Enhancements

* **User Authentication:** Implement a simple sign-up/login feature using a service like Firebase to allow users to **save their high scores** persistently.
* **Testing:** Implement unit tests (using Jest/Vitest) for business logic (like `shuffleArray` and score calculation) and integration tests (using React Testing Library) for component behavior.
* **PWA (Progressive Web App) Conversion:** Configure the application to be installable on mobile and desktop devices for offline access and a native feel.


## 📜 License

This project is released under the [MIT](https://choosealicense.com/licenses/mit/) License