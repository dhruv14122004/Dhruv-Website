# Dhruv Sharma - Portfolio Website

A stunning, retro-themed immersive portfolio website designed to showcase my journey, projects, and skills. Built with modern web technologies, this application features a unique neo-brutalism design aesthetic, interactive 3D elements, and smooth animations.


<img width="1914" height="927" alt="Screenshot From 2026-01-26 18-33-44" src="https://github.com/user-attachments/assets/a81ebe70-f8af-4262-be32-c3b3077934e4" />


## 🚀 Features

- **Retro Neo-Brutalism Design**: A unique visual style combining bold borders, vibrant colors, and mono-spaced typography.
- **Interactive Experience**:
  - **Keyboard Navigation**: Navigate the site using custom shortcuts (Press `?` to view keybinds).
  - **3D Elements**: IP integrated using React Three Fiber.
  - **Smooth Animations**: Powered by Framer Motion.
- **Dynamic Sections**:
  - **timeline**: A tree-structured visualization of my professional journey.
  - **Projects**: Showcase of my work with GitHub integrations.
  - **Experience**: Detailed breakdown of my career path.
- **Resume Viewer**: Built-in PDF viewer for easy resume access.
- **Floating Socials**: Quick access to my social profiles.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Tabler Icons](https://tabler.io/icons)
- **PDF Handling**: [React-PDF](https://github.com/wojtekmaj/react-pdf)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Email Service**: [Nodemailer](https://nodemailer.com/) (For contact form submissions)
- **Utilities**: [Cors](https://www.npmjs.com/package/cors), [Dotenv](https://www.npmjs.com/package/dotenv)


## 📦 Installation & Setup

Follow these steps to get the project running locally on your machine.

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/dhruv14122004/Dhruv-Website.git
cd Dhruv-Website
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-specific-password"
EMAIL_TO="recipient-email@gmail.com"
PORT=5000
```
*Note: For Gmail, use an App Password generated from your Google Account security settings.*

Start the backend server:
```bash
npm start
```
The server will start on `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 🎮 Keyboard Shortcuts

The website supports keyboard-first navigation for power users:
- `H`: Scroll to Hero/Home
- `E`: Scroll to Experience
- `P`: Scroll to Projects
- `C`: Scroll to Contact
- `R`: Toggle Resume Modal
- `?`: Show/Hide Keybinds Help

## 📂 Project Structure

```
Dhruv-Website/
├── backend/                # Node.js/Express Backend
│   ├── server.js           # Entry point
│   └── package.json
├── frontend/               # React Frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assets/         # Images, fonts, PDFs
│   │   ├── components/     # Reusable React components
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Entry point
│   └── package.json
└── readme.md               # Project documentation
```

---
*Built with ❤️ by Dhruv Sharma*
