
# Tours Gallery App  

This is a React-based application that displays a gallery of tours fetched from a public API. It is responsive, user-friendly, and interactive.  

---

## Features  

- Fetches tour data from an external API.  
- Allows users to remove tours they’re not interested in.  
- Provides a “Read More” feature to show or hide additional information.  
- Fully responsive design for different screen sizes.  

---

## Technologies Used  

- React  
- Vite  
- CSS  
- JavaScript  

---

## Getting Started  

### Prerequisites  

- Node.js (v16 or higher)  
- npm (comes with Node.js)  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/tours-gallery-app.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd tours-gallery-app  
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  

---

## Running the Project  

- **Development Mode:**  
  ```bash  
  npm run dev  
  ```  
  Open your browser and visit `http://localhost:5173`.  

- **Build for Production:**  
  ```bash  
  npm run build  
  ```  

---

## Project Structure  

```plaintext  
src/  
├── components/  
│   └── Gallery.jsx    # Main gallery component  
├── assets/  
│   └── styles/        # CSS styles  
├── App.jsx            # Main app entry point  
└── main.jsx           # Renders the app to the DOM  
```  

---

## How It Works  

1. **Fetching Data:**  
   The app uses the `fetch` API to get data from `https://course-api.com/react-tours-project`.  

2. **State Management:**  
   State is managed with React's `useState` and `useEffect` hooks.  

3. **User Interaction:**  
   Users can remove tours or toggle additional details using buttons.  

