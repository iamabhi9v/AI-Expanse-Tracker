# AI Expense Tracker

A full-stack expense tracking app that uses AI to parse natural language input.

Built by: Abhinav Anand  
GitHub: [iamabhi9v](https://github.com/iamabhi9v)  
Time to build: [1.5 Hours] (with AI assistance)

## 🎥 Demo

[Link to your screen recording]

## 🛠️ Tech Stack

- **Mobile:** React Native, Expo, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** SQLite
- **AI:** [Groq/OpenAI/Gemini] API

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- [AI Service] API key

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Add your AI API key to .env
npm run dev
```

### Mobile

```bash
cd mobile
npm install
npm start
# Scan QR code with Expo Go app
```

## 📁 Project Structure

The AI Expense Tracker project is organized into a clear client-server architecture, separating the mobile interface from the data processing logic.

1. Backend (Node.js/Express)
Located in the backend/ directory, this server acts as the central hub for data and AI logic.

1. src/index.ts: The entry point that defines the REST API endpoints and manages the server lifecycle.

2. src/services/aiService.ts: Handles communication with the Groq API to convert plain text into structured JSON.

3. src/database/database.ts: Manages the SQLite connection and executes CRUD operations for the expenses table.

2. Mobile (React Native/Expo)
Located in the mobile/ directory, this folder contains the user interface and device-side logic.

1. App.tsx: Sets up the application navigation and global providers.

2. src/screens/: Contains the main ExpenseTrackerScreen.tsx where users interact with the input and view their history.

3. src/components/:

1. ExpenseInput.tsx: Encapsulates the text input and the "Add Expense" button.

2. ExpenseCard.tsx: A reusable UI component for individual expense items with category emojis and delete actions.

4. src/services/api.ts: A utility layer that uses fetch to communicate with the backend via your Mac's local IP address.

5. src/types/: Defines TypeScript interfaces (like Expense) to ensure data consistency across the mobile components.

## 🤖 AI Prompt Design

I used this system prompt for expense parsing:
