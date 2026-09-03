# EAT Token Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 5+
- Redis 7+
- npm या yarn

### 1. Backend Setup

```bash
# Clone repo
git clone https://github.com/sunnyheri58-coder/eat_token.git
cd eat_token/backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your credentials
# - MongoDB URI
# - JWT Secret
# - Stripe Keys
# - Email credentials

# Start development server
npm run dev
```

### 2. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start React app
npm start
```

### 3. Using Docker (Recommended)

```bash
# Build and start all services
docker-compose up -d

# Check logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tokens
- `GET /api/tokens` - Get all tokens
- `GET /api/tokens/:id` - Get token details

### Trades
- `POST /api/trades/create` - Create new trade
- `GET /api/trades/my-trades` - Get user trades

### Payments
- `POST /api/payments/create-payment` - Create payment

## 🔧 Environment Variables

देखें `.env.example` फ़ाइल सभी आवश्यक variables के लिए।

## 📊 Database Models

1. **User** - User accounts और wallet info
2. **Token** - Token details और prices
3. **Trade** - Trading history
4. **Payment** - Payment records

## 🚀 Deployment

### Vercel (Frontend)
```bash
vercel deploy
```

### Heroku (Backend)
```bash
heroku create
heroku config:set MONGODB_URI=your_uri
git push heroku main
```

## 📞 Support

समस्या के लिए GitHub Issues खोलें।