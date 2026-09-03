# EAT Token - Crypto Exchange Platform

एक आधुनिक क्रिप्टोकरेंसी एक्सचेंज प्लेटफॉर्म जो उपयोगकर्ताओं को विभिन्न टोकन के साथ व्यापार करने की अनुमति देता है।

## Features

- **User Authentication**: सुरक्षित JWT-आधारित प्रमाणीकरण
- **Token Trading**: रीयल-टाइम में क्रिप्टो टोकन खरीदें और बेचें
- **Wallet Management**: डिजिटल वॉलेट के साथ शेष राशि ट्रैक करें
- **Payment Integration**: Stripe के साथ सुरक्षित भुगतान
- **Real-time Updates**: WebSocket का उपयोग करके लाइव मूल्य अपडेट
- **Responsive Design**: मोबाइल-अनुकूल इंटरफेस

## Technology Stack

### Backend
- Node.js + Express.js
- MongoDB (Database)
- Redis (Caching)
- JWT (Authentication)
- Stripe (Payment Gateway)

### Frontend
- React 18
- Redux Toolkit
- Tailwind CSS
- Socket.io (Real-time)
- Chart.js (Data Visualization)

## Installation

### Prerequisites
- Node.js 18+
- MongoDB
- Redis
- Docker (optional)

### Setup

1. **Repository को Clone करें**
```bash
git clone https://github.com/sunnyheri58-coder/eat_token.git
cd eat_token
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# .env फाइल में आवश्यक वेरिएबल जोड़ें
npm start
```

3. **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

### Docker के साथ

```bash
docker-compose up -d
```

यह सभी सेवाओं को शुरू करेगा:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000
- MongoDB: mongodb://localhost:27017
- Redis: redis://localhost:6379

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/eat_token
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
STRIPE_SECRET_KEY=your_stripe_key
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - उपयोगकर्ता पंजीकरण
- `POST /api/auth/login` - उपयोगकर्ता लॉगिन

### Users
- `GET /api/users/profile` - प्रोफाइल प्राप्त करें
- `PUT /api/users/profile` - प्रोफाइल अपडेट करें

### Tokens
- `GET /api/tokens` - सभी टोकन प्राप्त करें
- `GET /api/tokens/:id` - विशिष्ट टोकन विवरण

### Trades
- `POST /api/trades/create` - नया व्यापार बनाएं
- `GET /api/trades/my-trades` - उपयोगकर्ता के व्यापार

### Payments
- `POST /api/payments/create-payment` - भुगतान इरादा बनाएं

## Project Structure

```
eat_token/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Token.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── tokens.js
│   │   ├── trades.js
│   │   └── payments.js
│   ├── middleware/
│   │   └── auth.js
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Contributing

योगदान देने के लिए:

1. Fork करें
2. Feature branch बनाएं (`git checkout -b feature/AmazingFeature`)
3. Changes commit करें (`git commit -m 'Add AmazingFeature'`)
4. Branch को push करें (`git push origin feature/AmazingFeature`)
5. Pull Request खोलें

## License

यह प्रोजेक्ट MIT लाइसेंस के तहत है।

## Contact

- Author: sunnyheri58-coder
- Email: sunnyheri58@gmail.com
- GitHub: https://github.com/sunnyheri58-coder