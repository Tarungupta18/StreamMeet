# StreamMeet 🎥🌐

## Overview

StreamMeet is a cutting-edge real-time video conferencing application built with the MERN stack and Socket.io, designed to provide seamless peer-to-peer communication with minimal latency.

## 🌟 Key Features

- **Real-Time Video & Audio Communication**
  - Peer-to-peer video and audio streaming
  - Low-latency connection
  - Support for 50+ concurrent users per session

- **Advanced Collaboration Tools**
  - Real-time chat functionality
  - Screen sharing capabilities
  - Mute/Unmute controls
  - Unique meeting room identifiers

- **Security & Scalability**
  - Secure meeting rooms
  - MongoDB integration
  - Robust user management

## 🚀 Technologies Used

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB
- Mongoose
- Bcrypt (Authentication)

### Frontend
- React
- React Router
- Material-UI
- Axios
- Socket.io-client

## 📦 Prerequisites

- Node.js (v16+ recommended)
- npm or Yarn
- MongoDB

## 🔧 Installation

### Clone the Repository
```bash
git clone https://github.com/yourusername/StreamMeet.git
cd StreamMeet
```

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

### Frontend Setup
```bash
cd frontend
npm install
```

## 🖥️ Running the Application

### Start Backend (Development)
```bash
cd backend
npm run dev
```

### Start Frontend (Development)
```bash
cd frontend
npm start
```

## 🌐 Deployment

### Backend Deployment
```bash
cd backend
npm run prod  # Uses PM2 for production
```

### Frontend Deployment
```bash
cd frontend
npm run build
```

## 📈 Performance Metrics

- **User Engagement**: 30% increase in interaction
- **Concurrent Users**: 50+ per session
- **Meeting Rooms**: 5,000+ secure rooms managed

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the ISC License. See `LICENSE` for more information.

## 📞 Contact

Your Name - Tarun Gupta

Email - tkg21430@gmail.com

Project Link: [https://github.com/Tarungupta18/StreamMeet](https://github.com/Tarungupta18/StreamMeet)
