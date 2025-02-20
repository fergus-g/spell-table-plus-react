# Spell Table Plus

Spell Table Plus is a web application designed to enhance Commander tabletop card gaming experiences by providing virtual deck management, multiplayer sessions, and real-time game interactions.

## Why It Was Built

When playing Commander on Spell Table, it can be difficult to understand other players' board states due to factors such as camera quality or the arrangement of cards on the table. Spell Table Plus aims to solve this problem by offering better deck management, real-time updates, and the ability to view other players' screens clearly, making the game experience more seamless and enjoyable.

## Features

- **Deck Management**: Create, edit, and manage decks with up to 100 cards.
- **Multiplayer Support**: Host and join game sessions with up to 4 players.
- **Real-Time Interactions**: Use WebSockets for live updates and game state synchronization.
- **Player Screen Viewing**: View other players' screens during a session.

## Tech Stack

- **Frontend**: React (Vite) with Material UI
- **Backend**: Node.js with Express and Socket.io
- **Database**: SQL Server
- **Hosting**: Vercel (Frontend), Azure (Backend & Database)

## Installation & Setup

### Prerequisites
- Node.js (version 20+)
- SQL Server

### Clone the Repository
```sh
git clone https://github.com/fergus-g/spell-table-plus.git
cd spell-table-plus
```

### Install Dependencies
```sh
cd frontend
npm install
cd ../backend
npm install
```

### Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_SERVER=your_db_host
```

### Running the App
#### Backend
```sh
cd backend
npm run dev
```

#### Frontend
```sh
cd frontend
npm run dev
```

## Deployment
- **Frontend**: Deployed on Vercel (`vo.dev`)
- **Backend**: Hosted on Azure

## Contributing
Feel free to submit issues and pull requests to improve the app.

## License
MIT License

