# Tic Tac Toe Game - React + Vite

A classic Tic Tac Toe game built with React and Vite, featuring an interactive game board, winner detection, game history, and time travel functionality.

## 🎮 Features

- **Interactive Gameplay**: Click on squares to make moves
- **Two-Player Mode**: Alternating turns between X and O
- **Winner Detection**: Automatically detects wins and draws
- **Game History**: Track all moves and jump back to any previous state
- **Reset Functionality**: Start a new game at any time
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd tic-tac-toe
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

## 🎯 How to Play

1. Players take turns clicking on empty squares
2. Player X always goes first
3. Get three marks in a row (horizontally, vertically, or diagonally) to win
4. If all squares are filled with no winner, it's a draw
5. Use the game history to jump back to any previous move
6. Click "Reset Game" to start over

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling and responsive design
- **JavaScript ES6+** - Game logic and functionality

## 📁 Project Structure

```
src/
├── App.jsx          # Main game component with all game logic
├── App.css          # Game styling and responsive design
├── main.jsx         # React app entry point
└── index.css        # Global styles
```

## 🎨 Game Components

- **Square**: Individual board cell component
- **Board**: 3x3 game board with move handling
- **App (Game)**: Main component managing game state and history

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The game is fully responsive and works seamlessly across:

- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).te

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
