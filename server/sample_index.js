import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import connectDB from './utils/db.js';
import authRoutes from './routes/authRoutes.js';
import mediaRoutes from './routes/mediaRoutes.js'
import serviceRoutes from './routes/service.route.js'
import testimonialRoutes from './routes/testimonialRoute.js';


dotenv.config();
const app = express();

const __dirname = path.resolve();

const PORT = process.env.PORT;



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'https://www.archspaceinterio.in',
  'http://www.archspaceinterio.in',
  'https://archspaceinterio.in',
  'http://archspaceinterio.in',
  'https://www.archspaceinterio.com',
  'https://basic-eight-rho.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173'
].filter(Boolean);

const corsOption = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed from this origin: ' + origin));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
};

// Middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/media', mediaRoutes); // Adjust path if your route file name changes
app.use('/api/service', serviceRoutes);
app.use('/testimonials', testimonialRoutes)

app.listen(PORT, ()=>{
  connectDB();
  console.log(`http://localhost:${PORT}`);
})